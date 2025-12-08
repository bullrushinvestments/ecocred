import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch business specification:", err);
        setError("An error occurred while fetching the data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const renderFeatures = () => {
    return businessSpec?.features.map(feature => (
      <li key={feature} className={clsx('list-disc px-4', isMobile ? 'py-2' : 'py-3')}>
        {feature}
      </li>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{businessSpec?.name}</h1>
      <p className="mb-4 text-gray-700">{businessSpec?.description}</p>
      <ul className={clsx('list-inside', isMobile ? 'max-w-xs' : 'max-w-md')}>
        {renderFeatures()}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch business specification:", err);
        setError("An error occurred while fetching the data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const renderFeatures = () => {
    return businessSpec?.features.map(feature => (
      <li key={feature} className={clsx('list-disc px-4', isMobile ? 'py-2' : 'py-3')}>
        {feature}
      </li>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{businessSpec?.name}</h1>
      <p className="mb-4 text-gray-700">{businessSpec?.description}</p>
      <ul className={clsx('list-inside', isMobile ? 'max-w-xs' : 'max-w-md')}>
        {renderFeatures()}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;