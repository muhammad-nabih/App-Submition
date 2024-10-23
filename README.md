# Task Application

A modern Next.js 14 application with TypeScript, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- Built with Next.js 14 and React 18
- TypeScript for type safety
- State management with Redux Toolkit
- Styled using Tailwind CSS with animations
- Form handling with React Hook Form and Zod validation
- UI components from Radix UI
- Motion animations with Framer Motion
- Toast notifications with React Toastify
- Responsive design
- ESLint and Prettier for code consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example` (if applicable)

## 🚀 Usage

### Development
To start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
To create a production build:
```bash
npm run build
# or
yarn build
```

### Production
To start the production server:
```bash
npm run start
# or
yarn start
```

### Linting and Formatting
```bash
# Run ESLint
npm run lint

# Check lint issues without fixing
npm run checkLint

# Fix lint issues
npm run lint-fix

# Format code with Prettier
npm run format
```

## 🏗️ Project Structure

```
src/
├── app/              # App router pages and layouts
├── components/       # Reusable React components
├── contexts/        # React context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── schemas/         # Zod validation schemas
├── store/           # Redux store configuration
└── types/           # TypeScript type definitions
```

## 🧰 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Forms:** React Hook Form
- **Validation:** Zod
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Date Handling:** date-fns
- **Notifications:** React Toastify

## 🧪 Development Tools

- ESLint for code linting
- Prettier for code formatting
- TypeScript for static type checking
- PostCSS for CSS processing
- Tailwind CSS for utility-first styling

## 📝 Version

Current version: 0.1.0

## 📄 License

This project is private and not licensed for public use.
