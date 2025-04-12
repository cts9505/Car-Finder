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

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`) with `localStorage`
- **Build Tool**: [Node.js](https://nodejs.org/) with `npm`
- **Linting & Formatting**: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Prerequisites

- **Node.js**: Version 18.x or 20.x (LTS recommended)
- **npm**: Version 8.x or higher
- A modern web browser

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/cts9505/car-finder.git
   cd car-finder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   The app uses localStorage and doesn’t require external APIs by default. For API features:
   ```env
   GEMINI_API_KEY=your-api-key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

Refer to the full structure in the original content.

## Usage

Instructions on browsing, filtering, sorting, managing wishlist, theme toggle, and pagination.

## Contributing

1. Fork the repo
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push and create a PR:
   ```bash
   git push origin feature/your-feature
   ```
5. Lint and format:
   ```bash
   npm run lint
   npm run format
   ```

## Future Improvements

Ideas include API integration, authentication, advanced filters, etc.

## Troubleshooting

Covers common issues with server startup, wishlist, filters, and more.

## License

This project is licensed under the MIT License.

## Acknowledgments

Built with ❤️ by Chaitanya Shinde.
Thanks to Shadcn UI and Radix UI.
Inspired by modern car marketplace platforms.
