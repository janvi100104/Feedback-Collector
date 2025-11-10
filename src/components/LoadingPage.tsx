import LoadingSpinner from '@/components/LoadingSpinner';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
}