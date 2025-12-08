import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  testTitle: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('Failed to create test. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Test</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow">
        <div className="mb-4">
          <label htmlFor="testTitle" className="block mb-1">Test Title</label>
          <input
            type="text"
            id="testTitle"
            placeholder="Enter test title..."
            {...register('testTitle', { required: true })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            placeholder="Enter test description..."
            {...register('description', { required: true })}
            rows={5}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`px-4 py-2 text-white ${loading ? 'bg-gray-600' : 'bg-blue-500'} rounded hover:bg-blue-700`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormInputs {
  testTitle: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('Failed to create test. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Write a Test</h1>
      {error && <p role="alert" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-grow">
        <div className="mb-4">
          <label htmlFor="testTitle" className="block mb-1">Test Title</label>
          <input
            type="text"
            id="testTitle"
            placeholder="Enter test title..."
            {...register('testTitle', { required: true })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            placeholder="Enter test description..."
            {...register('description', { required: true })}
            rows={5}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`px-4 py-2 text-white ${loading ? 'bg-gray-600' : 'bg-blue-500'} rounded hover:bg-blue-700`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;