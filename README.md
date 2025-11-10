# Feedback Collector App

A simple Feedback Collector App built with Next.js, Prisma ORM, and MongoDB. This application allows users to submit feedback via a form and displays all submissions on a separate page.

## Documentation

- [API Documentation](./docs/api.md)
- [Architecture](./docs/architecture.md)

## Features

- Submit feedback via a form (name, email, message)
- Store feedback data in MongoDB using Prisma ORM
- View all feedback submissions on a server-rendered page
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14 (App Router, Server & Client Components)
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS

## Project Structure

```
/feedback-collector
│
├── app/
│   ├── page.tsx              # Landing page (form)
│   ├── feedback/
│   │   └── page.tsx          # Feedback list (server rendered)
│   └── api/
│       └── feedback/
│           └── route.ts      # API route for POST/GET
│
├── components/
│   └── FeedbackForm.tsx      # Feedback form component
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
├── .env.example              # Example environment variables
├── package.json
└── README.md
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

## Deployment

This app can be deployed to Vercel or any other platform that supports Next.js applications. Make sure to set the environment variables in your deployment platform.
