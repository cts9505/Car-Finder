'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Car } from '../types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface CarDialogProps {
  car: Car | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CarDialog({ car, open, onOpenChange }: CarDialogProps) {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getPricePrediction = async () => {
    if (!car) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/predict-price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand: car.brand,
          model: car.model,
          price: car.price,
        }),
      });
      
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Failed to get price prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!car) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {car.brand} {car.model} {car.year}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="w-full aspect-video object-cover rounded-lg"
          />
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">${car.price.toLocaleString()}</h3>
                {prediction && (
                  <p className="text-sm text-muted-foreground">
                    Estimated value in 5 years: ${prediction}
                  </p>
                )}
              </div>
              <Badge variant="secondary">{car.fuelType}</Badge>
            </div>
            <Button
              onClick={getPricePrediction}
              disabled={loading}
              variant="outline"
            >
              {loading ? 'Calculating...' : 'Predict Future Value'}
            </Button>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Specifications</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Transmission</span>
                    <span>{car.transmission}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Seating</span>
                    <span>{car.seatingCapacity} seats</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Mileage</span>
                    <span>{car.mileage} mpg</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Features</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}