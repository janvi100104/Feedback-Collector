'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';

interface State {
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

const initialState: State = {
  message: '',
  errors: {},
};

export default function FeedbackForm() {
  const [state, formAction] = useActionState(createFeedback, initialState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Client-side validation
  const validateForm = () => {
    const errors: State['errors'] = {};
    
    if (!name.trim()) {
      errors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (name.trim().length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.trim().length > 3000) {
      errors.message = 'Message must be less than 3000 characters';
    }
    
    return errors;
  };

  async function createFeedback(prevState: State, formData: FormData) {
    // Client-side validation
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      return { message: '', errors };
    }
    
    setIsSubmitting(true);
    try {
      // Get values from formData
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      const response = await fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return {
          message: errorData.error || 'Failed to submit feedback',
          errors: errorData.errors || {},
        };
      }

      // Clear form fields on success
      setName('');
      setEmail('');
      setMessage('');

      const result = await response.json();
      return { message: 'Thank you! Your feedback has been submitted successfully.', errors: {} };
    } catch (error) {
      return {
        message: 'An unexpected error occurred. Please check your connection and try again.',
        errors: {},
      };
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 form-input"
          placeholder="Enter your full name"
          required
          disabled={isSubmitting}
          aria-describedby={state?.errors?.name ? "name-error" : undefined}
        />
        {state?.errors?.name && (
          <p id="name-error" className="mt-2 text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 form-input"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
          aria-describedby={state?.errors?.email ? "email-error" : undefined}
        />
        {state?.errors?.email && (
          <p id="email-error" className="mt-2 text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Feedback <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 form-input"
          placeholder="Share your thoughts, suggestions, or concerns..."
          required
          disabled={isSubmitting}
          aria-describedby={state?.errors?.message ? "message-error" : undefined}
        ></textarea>
        {state?.errors?.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600">{state.errors.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 btn-primary ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner />
              <span className="ml-2">Submitting...</span>
            </>
          ) : (
            'Submit Feedback'
          )}
        </button>
      </div>

      {state?.message && (
        <ErrorDisplay 
          message={state.message} 
          type={state.message.includes('Thank you') ? 'success' : 'error'} 
        />
      )}
    </form>
  );
}