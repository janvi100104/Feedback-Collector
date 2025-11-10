import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 50;
}

function validateMessage(message: string): boolean {
  return message.trim().length >= 10 && message.trim().length <= 3000;
}

function validateRequiredFields(data: { name?: string; email?: string; message?: string }): string[] {
  const missingFields: string[] = [];
  if (!data.name || data.name.trim() === '') missingFields.push('name');
  if (!data.email || data.email.trim() === '') missingFields.push('email');
  if (!data.message || data.message.trim() === '') missingFields.push('message');
  return missingFields;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, email, message } = body;

    // Basic validation
    const missingFields = validateRequiredFields({ name, email, message });
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields', 
          errors: missingFields.reduce((acc, field) => {
            acc[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            return acc;
          }, {} as Record<string, string>)
        },
        { status: 400 }
      );
    }

    // Name validation
    if (!validateName(name)) {
      return NextResponse.json(
        { 
          error: 'Invalid name',
          errors: { name: 'Name must be between 2 and 50 characters' }
        },
        { status: 400 }
      );
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          errors: { email: 'Please enter a valid email address' }
        },
        { status: 400 }
      );
    }

    // Message validation
    if (!validateMessage(message)) {
      return NextResponse.json(
        { 
          error: 'Invalid message',
          errors: { message: 'Message must be between 10 and 3000 characters' }
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    };

    // Create feedback in database
    const feedback = await prisma.feedback.create({
      data: sanitizedData,
    });

    return NextResponse.json(feedback, { status: 201 });
  } catch (error) {
    console.error('Error creating feedback:', error);
    
    // Handle specific Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A feedback with this information already exists' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create feedback. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feedbacks. Please try again later.' },
      { status: 500 }
    );
  }
}