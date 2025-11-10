import Image from "next/image";
import FeedbackForm from '@/components/FeedbackForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback Collector</h1>
          <p className="text-gray-600">
            Share your thoughts with us. Your feedback helps us improve!
          </p>
          <Link 
            href="/feedback" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
          >
            View all feedback
          </Link>
        </div>
        
        <FeedbackForm />
      </div>
    </div>
  );
}
