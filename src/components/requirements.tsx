import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement[]>();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const handleAddRequirement = (data: Requirement) => {
    setRequirements([...requirements, data]);
    reset({ name: '', description: '', priority: 'low' });
  };

  const handleRemoveRequirement = (index: number) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  const onSubmitForm = handleSubmit((data) => {
    setLoading(true);
    setTimeout(() => { // Simulate API call
      onSubmit(data);
      toast({
        title: 'Requirements gathered successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      reset();
      setRequirements([]);
      setLoading(false);
    }, 1000);
  });

  return (
    <form onSubmit={onSubmitForm}>
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <input
            {...register(`[${index}].name`, { required: 'Name is required' })}
            placeholder="Requirement Name"
            aria-label={`Requirement name ${index + 1}`}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          <textarea
            {...register(`[${index}].description`, { required: 'Description is required' })}
            placeholder="Description"
            rows={4}
            aria-label={`Requirement description ${index + 1}`}
            className="w-full px-3 py-2 mt-2 border rounded-md focus:border-blue-500"
          />
          <select
            {...register(`[${index}].priority`)}
            aria-label={`Priority level for requirement ${index + 1}`}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors[`[${index}].name`] && (
            <p role="alert" className="mt-1 text-red-500">
              {errors[`[${index}].name`]?.message}
            </p>
          )}
          {errors[`[${index}].description`] && (
            <p role="alert" className="mt-1 text-red-500">
              {errors[`[${index}].description`]?.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => handleRemoveRequirement(index)}
            aria-label={`Remove requirement ${index + 1}`}
            className="text-red-600 hover:text-red-800 focus:outline-none"
          >
            Remove
          </button>
        </div>
      ))}
      <input {...register(`[${requirements.length}].name`)} type="hidden" />
      <textarea {...register(`[${requirements.length}].description`)} rows={4} type="hidden" />
      <select {...register(`[${requirements.length}].priority`)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="button"
        onClick={() => handleAddRequirement({ name: '', description: '', priority: 'low' })}
        aria-label="Add requirement"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add Requirement
      </button>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" aria-label="Submit requirements" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Requirement[]>();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const handleAddRequirement = (data: Requirement) => {
    setRequirements([...requirements, data]);
    reset({ name: '', description: '', priority: 'low' });
  };

  const handleRemoveRequirement = (index: number) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  const onSubmitForm = handleSubmit((data) => {
    setLoading(true);
    setTimeout(() => { // Simulate API call
      onSubmit(data);
      toast({
        title: 'Requirements gathered successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      reset();
      setRequirements([]);
      setLoading(false);
    }, 1000);
  });

  return (
    <form onSubmit={onSubmitForm}>
      {requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <input
            {...register(`[${index}].name`, { required: 'Name is required' })}
            placeholder="Requirement Name"
            aria-label={`Requirement name ${index + 1}`}
            className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
          />
          <textarea
            {...register(`[${index}].description`, { required: 'Description is required' })}
            placeholder="Description"
            rows={4}
            aria-label={`Requirement description ${index + 1}`}
            className="w-full px-3 py-2 mt-2 border rounded-md focus:border-blue-500"
          />
          <select
            {...register(`[${index}].priority`)}
            aria-label={`Priority level for requirement ${index + 1}`}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors[`[${index}].name`] && (
            <p role="alert" className="mt-1 text-red-500">
              {errors[`[${index}].name`]?.message}
            </p>
          )}
          {errors[`[${index}].description`] && (
            <p role="alert" className="mt-1 text-red-500">
              {errors[`[${index}].description`]?.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => handleRemoveRequirement(index)}
            aria-label={`Remove requirement ${index + 1}`}
            className="text-red-600 hover:text-red-800 focus:outline-none"
          >
            Remove
          </button>
        </div>
      ))}
      <input {...register(`[${requirements.length}].name`)} type="hidden" />
      <textarea {...register(`[${requirements.length}].description`)} rows={4} type="hidden" />
      <select {...register(`[${requirements.length}].priority`)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="button"
        onClick={() => handleAddRequirement({ name: '', description: '', priority: 'low' })}
        aria-label="Add requirement"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add Requirement
      </button>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" aria-label="Submit requirements" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default GatherRequirements;