import { NextResponse } from 'next/server';
import { cars } from '@/app/data/cars';
import { FilterState } from '@/app/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const brand = searchParams.get('brand');
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '100000');
  const fuelType = searchParams.get('fuelType');
  const seatingCapacity = parseInt(searchParams.get('seatingCapacity') || '0');
  const sortBy = searchParams.get('sortBy');

  let filteredCars = [...cars];

  // Apply filters
  if (brand && brand !== 'all') {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }
  
  filteredCars = filteredCars.filter(car => 
    car.price >= minPrice && 
    car.price <= maxPrice
  );

  if (fuelType && fuelType !== 'all') {
    filteredCars = filteredCars.filter(car => car.fuelType === fuelType);
  }

  if (seatingCapacity && seatingCapacity !== 0) {
    filteredCars = filteredCars.filter(car => car.seatingCapacity === seatingCapacity);
  }

  // Apply sorting
  if (sortBy) {
    filteredCars.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }

  // Calculate pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedCars = filteredCars.slice(start, end);
  const totalPages = Math.ceil(filteredCars.length / limit);

  return NextResponse.json({
    cars: paginatedCars,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: filteredCars.length
    }
  });
}