import FeedbackForm from '@/components/FeedbackForm';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata(
  'FeedbackHub - Share Your Feedback',
  'Submit your feedback and help us improve our services. Your opinion matters to us.'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us improve by sharing your thoughts, suggestions, or concerns. 
            Your feedback is valuable to us!
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Feedback Form
              </h2>
              <p className="text-gray-600">
                Please fill out the form below with your feedback
              </p>
            </div>
            
            <FeedbackForm />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Already submitted feedback?{' '}
            <a 
              href="/feedback" 
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
            >
              View all feedback
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}