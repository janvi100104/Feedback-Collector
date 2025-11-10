import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const feedbacks = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Great service! Really enjoyed using this application.',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'The UI is clean and intuitive. Good job!',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      message: 'Found a few bugs but overall it works well.',
    },
  ];

  for (const feedback of feedbacks) {
    const createdFeedback = await prisma.feedback.create({
      data: feedback,
    });
    console.log(`Created feedback with id: ${createdFeedback.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });