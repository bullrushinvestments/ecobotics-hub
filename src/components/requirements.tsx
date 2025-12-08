import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    isRequired: boolean;
  }>;
}

interface IGatherRequirementsForm {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  requirementIsRequired: boolean;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const [requirementsList, setRequirementsList] = useState<IRequirement[]>([]);
  const router = useRouter();

  const onSubmit = (data: IGatherRequirementsForm) => {
    if (!data.requirementTitle || !data.requirementName || !data.requirementType) return;

    const newRequirement: IRequirement = {
      title: data.requirementTitle,
      description: data.requirementDescription,
      requirements: [{
        name: data.requirementName,
        type: data.requirementType,
        isRequired: data.requirementIsRequired
      }]
    };

    setRequirementsList([...requirementsList, newRequirement]);
    reset();
  };

  const handleRemove = (index: number) => {
    const updatedList = requirementsList.filter((_, i) => i !== index);
    setRequirementsList(updatedList);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="requirementTitle" className="block text-sm font-medium leading-5 text-gray-700">
          Requirement Title
        </label>
        <input type="text" id="requirementTitle" name="requirementTitle" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
        {errors.requirementTitle && <p className="mt-2 text-red-600">Requirement title is required</p>}

        <label htmlFor="requirementDescription" className="block text-sm font-medium leading-5 text-gray-700">
          Requirement Description
        </label>
        <textarea id="requirementDescription" name="requirementDescription" ref={register} rows={3} className="form-textarea block w-full rounded-md shadow-sm"></textarea>

        <div className="space-y-2">
          <label htmlFor="requirementName" className="block text-sm font-medium leading-5 text-gray-700">Requirement Name</label>
          <input type="text" id="requirementName" name="requirementName" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
          {errors.requirementName && <p className="mt-2 text-red-600">Requirement name is required</p>}

          <label htmlFor="requirementType" className="block text-sm font-medium leading-5 text-gray-700">Requirement Type</label>
          <input type="text" id="requirementType" name="requirementType" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
          {errors.requirementType && <p className="mt-2 text-red-600">Requirement type is required</p>}

          <label htmlFor="isRequired" className="block text-sm font-medium leading-5 text-gray-700">Is Required?</label>
          <input type="checkbox" id="isRequired" name="requirementIsRequired" ref={register} />
        </div>

        <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Requirement
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {requirementsList.map((requirement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h2 className="text-gray-900">{requirement.title}</h2>
              {requirement.description && <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>}
              <ul role="list" aria-labelledby={requirement.title} className="divide-y divide-gray-200 mt-4">
                {requirement.requirements.map((req, reqIndex) => (
                  <li key={req.name} className="flex justify-between py-3 sm:py-4">
                    <div className="text-sm text-gray-900">{req.name}</div>
                    <div className="ml-2 flex items-center text-sm text-gray-500">
                      {req.type}
                      <span className="sr-only">, </span>
                      {req.isRequired ? 'Required' : 'Optional'}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" onClick={() => handleRemove(index)} className="text-red-600 hover:text-red-900">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    isRequired: boolean;
  }>;
}

interface IGatherRequirementsForm {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  requirementIsRequired: boolean;
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const [requirementsList, setRequirementsList] = useState<IRequirement[]>([]);
  const router = useRouter();

  const onSubmit = (data: IGatherRequirementsForm) => {
    if (!data.requirementTitle || !data.requirementName || !data.requirementType) return;

    const newRequirement: IRequirement = {
      title: data.requirementTitle,
      description: data.requirementDescription,
      requirements: [{
        name: data.requirementName,
        type: data.requirementType,
        isRequired: data.requirementIsRequired
      }]
    };

    setRequirementsList([...requirementsList, newRequirement]);
    reset();
  };

  const handleRemove = (index: number) => {
    const updatedList = requirementsList.filter((_, i) => i !== index);
    setRequirementsList(updatedList);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="requirementTitle" className="block text-sm font-medium leading-5 text-gray-700">
          Requirement Title
        </label>
        <input type="text" id="requirementTitle" name="requirementTitle" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
        {errors.requirementTitle && <p className="mt-2 text-red-600">Requirement title is required</p>}

        <label htmlFor="requirementDescription" className="block text-sm font-medium leading-5 text-gray-700">
          Requirement Description
        </label>
        <textarea id="requirementDescription" name="requirementDescription" ref={register} rows={3} className="form-textarea block w-full rounded-md shadow-sm"></textarea>

        <div className="space-y-2">
          <label htmlFor="requirementName" className="block text-sm font-medium leading-5 text-gray-700">Requirement Name</label>
          <input type="text" id="requirementName" name="requirementName" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
          {errors.requirementName && <p className="mt-2 text-red-600">Requirement name is required</p>}

          <label htmlFor="requirementType" className="block text-sm font-medium leading-5 text-gray-700">Requirement Type</label>
          <input type="text" id="requirementType" name="requirementType" ref={register({ required: true })} className="form-input block w-full rounded-md shadow-sm" />
          {errors.requirementType && <p className="mt-2 text-red-600">Requirement type is required</p>}

          <label htmlFor="isRequired" className="block text-sm font-medium leading-5 text-gray-700">Is Required?</label>
          <input type="checkbox" id="isRequired" name="requirementIsRequired" ref={register} />
        </div>

        <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Requirement
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {requirementsList.map((requirement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h2 className="text-gray-900">{requirement.title}</h2>
              {requirement.description && <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>}
              <ul role="list" aria-labelledby={requirement.title} className="divide-y divide-gray-200 mt-4">
                {requirement.requirements.map((req, reqIndex) => (
                  <li key={req.name} className="flex justify-between py-3 sm:py-4">
                    <div className="text-sm text-gray-900">{req.name}</div>
                    <div className="ml-2 flex items-center text-sm text-gray-500">
                      {req.type}
                      <span className="sr-only">, </span>
                      {req.isRequired ? 'Required' : 'Optional'}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" onClick={() => handleRemove(index)} className="text-red-600 hover:text-red-900">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;