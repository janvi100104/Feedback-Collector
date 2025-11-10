import React from 'react';
import { PrismaClient } from '@prisma/client';

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

import Link from 'next/link';

const prisma = new PrismaClient();

async function getFeedbacks(): Promise<Feedback[]> {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return feedbacks as Feedback[];
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  }
}

// Format date consistently to avoid hydration issues
function formatDate(date: Date): string {
  return new Date(date).toISOString().split('T')[0];
}

export default async function FeedbackList() {
  const feedbacks = await getFeedbacks();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Feedback</h1>
          <Link 
            href="/" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Feedback Form
          </Link>
        </div>
        
        {feedbacks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No feedback submitted yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{feedback.name}</h2>
                    <p className="text-gray-600">{feedback.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(feedback.createdAt)}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">{feedback.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}