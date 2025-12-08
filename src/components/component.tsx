import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  contentTypes: Array<string>;
}

interface FormValues {
  businessName: string;
  businessDescription: string;
  contentType: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    axios.post('/api/business-specification', data)
      .then(response => {
        console.log('Business specification created:', response.data);
        reset();
      })
      .catch(err => {
        setError(`Failed to create business specification. ${err.message}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: true })}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.businessName && 'border-red-500'
            )}
            aria-invalid={errors.businessName ? 'true' : 'false'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="businessDescription" className="block mb-1">Business Description</label>
          <textarea
            id="businessDescription"
            {...register('businessDescription', { required: true })}
            rows={3}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.businessDescription && 'border-red-500'
            )}
            aria-invalid={errors.businessDescription ? 'true' : 'false'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contentType" className="block mb-1">Content Types</label>
          <select
            id="contentType"
            {...register('contentType', { required: true })}
            multiple={true}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.contentType && 'border-red-500'
            )}
            aria-invalid={errors.contentType ? 'true' : 'false'}
          >
            <option value="blog">Blog</option>
            <option value="news">News</option>
            <option value="tutorial">Tutorial</option>
            <option value="video">Video</option>
          </select>
        </div>
        <button
          type="submit"
          className={clsx(
            'w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
            loading && 'opacity-50 cursor-not-allowed'
          )}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  contentTypes: Array<string>;
}

interface FormValues {
  businessName: string;
  businessDescription: string;
  contentType: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    axios.post('/api/business-specification', data)
      .then(response => {
        console.log('Business specification created:', response.data);
        reset();
      })
      .catch(err => {
        setError(`Failed to create business specification. ${err.message}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: true })}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.businessName && 'border-red-500'
            )}
            aria-invalid={errors.businessName ? 'true' : 'false'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="businessDescription" className="block mb-1">Business Description</label>
          <textarea
            id="businessDescription"
            {...register('businessDescription', { required: true })}
            rows={3}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.businessDescription && 'border-red-500'
            )}
            aria-invalid={errors.businessDescription ? 'true' : 'false'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contentType" className="block mb-1">Content Types</label>
          <select
            id="contentType"
            {...register('contentType', { required: true })}
            multiple={true}
            className={clsx(
              'w-full px-3 py-2 border rounded',
              errors.contentType && 'border-red-500'
            )}
            aria-invalid={errors.contentType ? 'true' : 'false'}
          >
            <option value="blog">Blog</option>
            <option value="news">News</option>
            <option value="tutorial">Tutorial</option>
            <option value="video">Video</option>
          </select>
        </div>
        <button
          type="submit"
          className={clsx(
            'w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
            loading && 'opacity-50 cursor-not-allowed'
          )}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;