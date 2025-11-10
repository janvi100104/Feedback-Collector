import React from 'react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export const metadata = generateMetadata(
  'FeedbackHub - All Feedback',
  'View all feedback submitted by our users. See what others are saying about our services.'
);

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
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default async function FeedbackList() {
  const feedbacks = await getFeedbacks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Feedback Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View all feedback submitted by our users
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                All Feedback ({feedbacks.length})
              </h2>
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
              >
                Submit Feedback
              </Link>
            </div>
            
            {feedbacks.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No feedback yet</h3>
                <p className="mt-1 text-gray-500">
                  Be the first to share your thoughts with us.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Feedback
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {feedbacks.map((feedback) => (
                  <div key={feedback.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 feedback-card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{feedback.name}</h3>
                        <p className="text-gray-600">{feedback.email}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {formatDate(feedback.createdAt)}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{feedback.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}