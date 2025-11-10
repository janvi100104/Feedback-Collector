export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <span className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FeedbackHub. All rights reserved.
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <span className="text-gray-500 text-sm">
              Built with Next.js, Prisma, and MongoDB
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}