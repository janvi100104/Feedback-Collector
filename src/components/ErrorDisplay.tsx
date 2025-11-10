interface ErrorDisplayProps {
  message: string;
  type?: 'error' | 'success';
}

export default function ErrorDisplay({ message, type = 'error' }: ErrorDisplayProps) {
  const isError = type === 'error';
  
  return (
    <div 
      className={`rounded-lg p-4 text-center ${
        isError 
          ? 'bg-red-50 text-red-800 border border-red-200' 
          : 'bg-green-50 text-green-800 border border-green-200'
      }`} 
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
}