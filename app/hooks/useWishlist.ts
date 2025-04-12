'use client';

import { useState, useEffect } from 'react';
import { Car } from '../types';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const addToWishlist = (car: Car) => {
    const newWishlist = [...wishlist, car];
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (carId: string) => {
    const newWishlist = wishlist.filter(car => car.id !== carId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const isInWishlist = (carId: string) => {
    return wishlist.some(car => car.id === carId);
  };

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
};