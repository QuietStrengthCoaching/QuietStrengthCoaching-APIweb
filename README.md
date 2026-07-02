# Quiet Strength Coaching - Web Frontend

Modern web application frontend for Mental Health & Wellness Coaching Practice built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Client-Facing Interface**: Landing page and client portal
- **Admin Dashboard**: Comprehensive management system for:
  - Client management
  - Session scheduling and tracking
  - Settings and configuration
- **Modern UI**: Built with Tailwind CSS for responsive design
- **Type Safe**: Full TypeScript support
- **API Integration**: Ready to connect with the QuietStrengthCoaching-API backend

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Node**: 20+

## Getting Started

### Prerequisites

- Node.js 20+ and npm/yarn
- The QuietStrengthCoaching-API running locally or accessible

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/QuietStrengthCoaching/QuietStrengthCoaching-APIweb.git
   cd QuietStrengthCoaching-APIweb
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   ```bash
   cp .env.example .env.local
   # Edit .env.local and set your API URL if different
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── app/
│   ├── dashboard/           # Admin dashboard routes
│   │   ├── clients/
│   │   ├── sessions/
│   │   └── settings/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
├── lib/
│   └── api.ts              # API client configuration
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## API Integration

The app is configured to connect to the backend API at `http://localhost:3001` by default.

To connect to a different API endpoint, update the `NEXT_PUBLIC_API_URL` environment variable in `.env.local`.

## Development

### Hot Reload

During development, the app automatically reloads when you make changes.

### Type Checking

Run TypeScript type checking without compilation:
```bash
npm run type-check
```

## Deployment

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## Next Steps

- [ ] Add authentication/login system
- [ ] Connect dashboard components to API endpoints
- [ ] Implement client portal features
- [ ] Add form validation
- [ ] Set up error handling
- [ ] Add unit/integration tests
- [ ] Deploy to hosting platform

## Related Repositories

- [QuietStrengthCoaching-API](https://github.com/QuietStrengthCoaching/QuietStrengthCoaching-API) - Backend API

## License

Apache License 2.0
