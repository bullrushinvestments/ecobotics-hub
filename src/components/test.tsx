import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestForm>();

  const onSubmit = async (data: TestForm) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
    } catch (err) {
      setError('Failed to create test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-4">Write a Test</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            className={`border p-2 w-full ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.title ? true : false}
          />
          <p role="alert" aria-live="polite" className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            rows={4}
            className={`border p-2 w-full ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.description ? true : false}
          />
          <p role="alert" aria-live="polite" className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300'} disabled:cursor-not-allowed`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestForm>();

  const onSubmit = async (data: TestForm) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
    } catch (err) {
      setError('Failed to create test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-4">Write a Test</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'This field is required' })}
            className={`border p-2 w-full ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.title ? true : false}
          />
          <p role="alert" aria-live="polite" className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            rows={4}
            className={`border p-2 w-full ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.description ? true : false}
          />
          <p role="alert" aria-live="polite" className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300'} disabled:cursor-not-allowed`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;