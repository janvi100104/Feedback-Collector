'use client';

import { useState } from 'react';
import { useActionState } from 'react';

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

  async function createFeedback(prevState: State, formData: FormData) {
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
          message: 'Failed to submit feedback',
          errors: errorData.errors || {},
        };
      }

      // Clear form fields on success
      setName('');
      setEmail('');
      setMessage('');

      const result = await response.json();
      return { message: 'Feedback submitted successfully!', errors: {} };
    } catch (error) {
      return {
        message: 'An unexpected error occurred.',
        errors: {},
      };
    }
  }

  return (
    <form action={formAction} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {state?.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {state?.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Feedback Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        {state?.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Feedback
        </button>
      </div>

      {state?.message && (
        <div className={`mt-4 p-2 text-center ${state.message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </div>
      )}
    </form>
  );
}