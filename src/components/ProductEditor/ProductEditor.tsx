import React, { useState } from 'react';
import { Param, Model } from './types';
import './ProductEditor.scss';

const params: Param[] = [
  { id: 1, name: 'Title' },
  { id: 2, name: 'Description' },
];

const initialModel: Model = {
  paramValues: [
    { paramId: 1, value: 'Cup' },
    { paramId: 2, value: 'Fill me with tea!' },
  ],
};

const ProductEditor: React.FC = () => {
  const [model, setModel] = useState<Model>(initialModel);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setModel((prevModel) => ({
      paramValues: prevModel.paramValues.map((paramValue) =>
        paramValue.paramId === Number(id)
          ? { ...paramValue, value }
          : paramValue
      ),
    }));
  };

  const getModel = () => {
    if (model.paramValues.some((paramValue) => !paramValue.value)) {
      window.alert('Please, fill all fields');
      return null;
    }

    return model;
  };

  return (
    <div>
      <form className='editorBlock'>
        {params.map((param) => {
          const paramValue =
            model.paramValues.find((value) => value.paramId === param.id)
              ?.value || '';

          return (
            <div className='editorItem' key={param.id}>
              <label className='editorTitle'>{param.name}</label>
              <input
                className='editorInput'
                type='text'
                id={param.id.toString()}
                name={param.name}
                value={paramValue}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </form>
      <button onClick={() => console.log(getModel())}>Get model</button>
    </div>
  );
};

export default ProductEditor;
