'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { brands, fuelTypes, seatingCapacities } from '../data/cars';
import { FilterState } from '../types';

interface CarFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export function CarFilters({ onFilterChange }: CarFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    minPrice: 0,
    maxPrice: 100000,
    fuelType: '',
    seatingCapacity: 0,
    sortBy: '',
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    // Enforce a minimum range of $5,000 between minPrice and maxPrice
    const minRange = 5000;
    let [newMinPrice, newMaxPrice] = value;

    // Ensure maxPrice is at least minPrice + minRange
    if (newMaxPrice - newMinPrice < minRange) {
      if (newMinPrice === filters.minPrice) {
        // User is adjusting maxPrice; adjust it to maintain minRange
        newMaxPrice = newMinPrice + minRange;
      } else {
        // User is adjusting minPrice; adjust it to maintain minRange
        newMinPrice = newMaxPrice - minRange;
      }
    }

    // Ensure prices stay within bounds
    newMinPrice = Math.max(0, newMinPrice);
    newMaxPrice = Math.min(100000, newMaxPrice);

    const newFilters = {
      ...filters,
      minPrice: newMinPrice,
      maxPrice: newMaxPrice,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Brand</label>
        <Select
          value={filters.brand}
          onValueChange={(value) => handleFilterChange('brand', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <div className="pt-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]} // Controlled value for range
            min={0}
            max={100000}
            step={1000}
            onValueChange={handlePriceChange}
            minStepsBetweenThumbs={5} // Ensures thumbs are at least 5 steps (5 * 1000 = $5,000) apart
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>${filters.minPrice.toLocaleString()}</span>
            <span>${filters.maxPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Fuel Type</label>
        <Select
          value={filters.fuelType}
          onValueChange={(value) => handleFilterChange('fuelType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {fuelTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Seating Capacity</label>
        <Select
          value={filters.seatingCapacity.toString()}
          onValueChange={(value) =>
            handleFilterChange('seatingCapacity', parseInt(value))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select seating capacity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All Capacities</SelectItem>
            {seatingCapacities.map((capacity) => (
              <SelectItem key={capacity} value={capacity.toString()}>
                {capacity} Seats
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Sort By</label>
        <Select
          value={filters.sortBy}
          onValueChange={(value: FilterState['sortBy']) =>
            handleFilterChange('sortBy', value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}