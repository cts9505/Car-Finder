'use client';

import { Car } from '../types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

export function CarCard({ car, onClick }: CarCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(car.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video cursor-pointer" onClick={onClick}>
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
              <p className="text-sm text-muted-foreground">{car.year}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => inWishlist ? removeFromWishlist(car.id) : addToWishlist(car)}
              className={inWishlist ? 'text-red-500' : ''}
            >
              <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Price</span>
              <span className="font-semibold">${car.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Fuel Type</span>
              <span>{car.fuelType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Seats</span>
              <span>{car.seatingCapacity}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="secondary" className="w-full" onClick={onClick}>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}