'use client';

import { useState } from 'react';
import { cars } from './data/cars';
import { Car, FilterState } from './types';
import { CarCard } from './components/CarCard';
import { CarFilters } from './components/CarFilters';
import { CarDialog } from './components/CarDialog';
import { ThemeToggle } from './components/ThemeToggle';
import { FooterContainer } from './components/FooterContainer';
import { Button } from '@/components/ui/button';
import { useWishlist } from './hooks/useWishlist';
import { Heart } from 'lucide-react';

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    minPrice: 0,
    maxPrice: 100000,
    fuelType: '',
    seatingCapacity: 0,
    sortBy: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showWishlist, setShowWishlist] = useState(false);
  const { wishlist } = useWishlist();
  const itemsPerPage = 10;

  const filteredCars = (showWishlist ? wishlist : cars).filter((car) => {
    if (filters.brand && filters.brand !== 'all' && car.brand !== filters.brand) return false;
    if (car.price < filters.minPrice || car.price > filters.maxPrice) return false;
    if (filters.fuelType && filters.fuelType !== 'all' && car.fuelType !== filters.fuelType) return false;
    if (
      filters.seatingCapacity &&
      filters.seatingCapacity !== 0 &&
      car.seatingCapacity !== filters.seatingCapacity
    )
      return false;
    return true;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (filters.sortBy === 'price-asc') return a.price - b.price;
    if (filters.sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedCars.length / itemsPerPage);
  const currentCars = sortedCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Car Finder</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowWishlist(!showWishlist)}
            >
              <Heart className={showWishlist ? 'fill-current' : ''} />
              {showWishlist ? 'Show All Cars' : 'Wishlist'}
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside>
            <CarFilters onFilterChange={setFilters} />
          </aside>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onClick={() => setSelectedCar(car)}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <CarDialog
        car={selectedCar}
        open={!!selectedCar}
        onOpenChange={(open) => !open && setSelectedCar(null)}
      />
    </div>
  );
}