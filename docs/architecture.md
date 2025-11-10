# Project Architecture

## Overview

The Feedback Collector App follows a modern full-stack architecture using Next.js, Prisma ORM, and MongoDB. The application is structured to separate concerns between the frontend, backend, and data layers.

## Technology Stack

- **Frontend**: Next.js with React Server Components and Client Components
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS

## Folder Structure

```
/feedback-collector
│
├── app/                     # Next.js App Router
│   ├── page.tsx            # Main page with feedback form
│   ├── feedback/
│   │   └── page.tsx        # Feedback list page
│   └── api/
│       └── feedback/
│           └── route.ts    # API routes for feedback
│
├── components/             # React components
│   └── FeedbackForm.tsx
│
├── prisma/                 # Prisma schema and migrations
│   └── schema.prisma
│
├── scripts/                # Utility scripts
│   └── seed.ts
│
├── docs/                   # Documentation
│   ├── api.md
│   └── architecture.md
│
├── public/                 # Static assets
├── styles/                 # Global styles
└── ...
```

## Data Flow

1. **User submits feedback**:
   - User fills out the feedback form on the main page
   - Form data is sent to the `/api/feedback` POST endpoint
   - API validates the data and creates a new entry in MongoDB via Prisma

2. **Viewing feedback**:
   - User navigates to `/feedback` page
   - Server component fetches all feedback entries from MongoDB via Prisma
   - Feedback entries are rendered on the page

## Component Architecture

### Client Components
- `FeedbackForm.tsx`: Handles form state and submission

### Server Components
- `page.tsx`: Main page that includes the feedback form
- `feedback/page.tsx`: Server-rendered page that displays all feedback

### API Routes
- `/api/feedback/route.ts`: RESTful API endpoints for feedback operations

## Database Design

### Feedback Model

```prisma
model Feedback {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

## Deployment

The application can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom Node.js server. Make sure to set the appropriate environment variables for the database connection.