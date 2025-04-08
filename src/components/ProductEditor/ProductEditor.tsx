import React, { useState } from 'react';
import { Param, Model } from './types';
import './ProductEditor.scss';

const params: Param[] = [
  { name: 'title', label: 'Name' },
  { name: 'description', label: 'Description' },
];

const initialModel: Model = {
  title: 'Cup',
  description: 'Fill me with tea!',
};

const ProductEditor: React.FC = () => {
  const [model, setModel] = useState<Model>(initialModel);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const getModel = () => {
    if (!model.title || !model.description) {
      window.alert('Please, fill all fields');
      return null;
    }

    return model;
  };

  return (
    <div>
      <form>
        {params.map((param) => (
          <div key={param.name}>
            <label className='editorTitle' htmlFor={param.name}>{param.label}</label>
            <input
              className='editorInput'
              type='text'
              id={param.name}
              name={param.name}
              value={model[param.name] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
      <button onClick={() => console.log(getModel())}>Get model</button>
    </div>
  );
};

export default ProductEditor;
