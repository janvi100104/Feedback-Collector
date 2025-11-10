# FeedbackHub - Production-Grade Feedback Collector App

A modern, production-ready Feedback Collector App built with Next.js, Prisma ORM, and MongoDB. This application allows users to submit feedback via a form and displays all submissions on a server-rendered page.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

## Features

- **Modern UI/UX**: Enhanced with a professional design using Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Form Validation**: Comprehensive client and server-side validation
- **Error Handling**: Graceful error handling with user-friendly messages
- **Accessibility**: WCAG-compliant components with proper ARIA attributes
- **SEO Optimization**: Metadata, sitemap, and robots.txt for better search engine visibility
- **Performance**: Optimized with Next.js features like server components and static generation
- **Production Ready**: Includes health checks, error boundaries, and analytics integration

## Tech Stack

- **Frontend**: Next.js 14 (App Router, Server & Client Components)
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure

```
/feedback-collector
│
├── app/
│   ├── page.tsx              # Landing page (form)
│   ├── feedback/
│   │   └── page.tsx          # Feedback list (server rendered)
│   ├── api/
│   │   ├── feedback/
│   │   │   └── route.ts      # API route for POST/GET
│   │   └── health/
│   │       └── route.ts      # Health check endpoint
│   ├── sitemap.ts            # Sitemap for SEO
│   ├── robots.ts             # Robots.txt configuration
│   └── not-found.tsx         # 404 page
│
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Page footer
│   ├── FeedbackForm.tsx      # Feedback form component
│   ├── LoadingSpinner.tsx    # Loading indicator
│   ├── ErrorDisplay.tsx      # Error message display
│   ├── ErrorBoundary.tsx     # Error boundary component
│   ├── Analytics.tsx         # Analytics integration
│   ├── Icon.tsx              # SVG icon component
│   └── LoadingPage.tsx       # Loading page component
│
├── lib/
│   ├── metadata.ts           # Metadata generation utilities
│   └── config.ts             # Configuration management
│
├── prisma/
│   └── schema.prisma         # Prisma schema
│
├── scripts/
│   └── seed.ts               # Database seeding script
│
├── docs/                     # Documentation
│   ├── api.md
│   └── architecture.md
│
├── public/                   # Static assets
├── styles/                   # Global styles
└── ...
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your MongoDB database:
   - Option 1: Install MongoDB locally ([instructions](https://docs.mongodb.com/manual/installation/))
   - Option 2: Use MongoDB Atlas (cloud MongoDB service):
     1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     2. Create a new cluster
     3. Create a database user
     4. Add your IP address to the IP whitelist
     5. Get your connection string
4. Update the `DATABASE_URL` in `.env` with your MongoDB connection string
5. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
6. (Optional) Seed the database with sample data:
   ```bash
   npm run seed
   ```
7. Run the development server:
   ```bash
   npm run dev
   ```
8. Open [http://localhost:3000](http://localhost:3000) with your browser

## Environment Variables

Create a `.env` file based on `.env.example`:

```
# For local MongoDB installation
DATABASE_URL="mongodb://localhost:27017/feedback-collector"

# For MongoDB Atlas (replace with your connection string)
# DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/feedback-collector?retryWrites=true&w=majority"
```

## Data Model

The application uses a single `Feedback` model:

```prisma
model Feedback {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

## API Endpoints

- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Retrieve all feedback
- `GET /api/health` - Health check endpoint

## Deployment

This app can be deployed to Vercel or any other platform that supports Next.js applications. Make sure to set the environment variables in your deployment platform.

## Production Features

- **SEO Optimization**: Proper metadata, sitemap, and robots.txt
- **Error Handling**: Comprehensive error boundaries and fallback UI
- **Performance**: Optimized with Next.js features
- **Accessibility**: WCAG-compliant components
- **Monitoring**: Health check endpoints and analytics integration
- **Security**: Input validation and sanitization

## Contributing

We welcome contributions to FeedbackHub! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

If you discover any security-related issues, please email [security@feedbackhub.example.com](mailto:security@feedbackhub.example.com) instead of using the issue tracker. Please see our [Security Policy](SECURITY.md) for more information.