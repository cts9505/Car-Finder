# Car Finder

**Car Finder** is a modern web application built with Next.js and TypeScript that allows users to browse, filter, and save cars to a wishlist. With a clean and responsive UI, users can search for cars based on brand, price, fuel type, and seating capacity, view detailed car information, and manage their favorite cars using browser `localStorage`.

## Features

- **Car Browsing**: View a list of cars with details like brand, model, price, fuel type, and seating capacity.
- **Advanced Filters**: Filter cars by:
  - Brand (e.g., Toyota, Honda)
  - Price range (using a dual-thumb slider)
  - Fuel type (e.g., Petrol, Electric)
  - Seating capacity (e.g., 2, 5, 7 seats)
- **Wishlist Management**: Add or remove cars to a wishlist, persisted in `localStorage` for a seamless experience across sessions.
- **Sorting**: Sort cars by price (low to high or high to low).
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Theme Toggle**: Switch between light and dark modes.
- **Pagination**: Navigate through multiple pages of car results.
- **Car Details Dialog**: View detailed car information in a modal dialog.
- **Type-Safe Codebase**: Built with TypeScript for robust type checking and maintainability.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework for server-side rendering and static site generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (for type-safe JavaScript)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on [Radix UI](https://www.radix-ui.com/) for accessible, customizable components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
- **Icons**: [Lucide React](https://lucide.dev/) (for lightweight, customizable icons)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`) with `localStorage`
- **Build Tool**: [Node.js](https://nodejs.org/) with `npm`
- **Linting & Formatting**: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: Version 18.x or 20.x (LTS recommended)
- **npm**: Version 8.x or higher (comes with Node.js)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/car-finder.git
   cd car-finder
