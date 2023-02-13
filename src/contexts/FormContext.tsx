import { createContext, ReactNode, useContext, useState } from 'react';

type FormContextType = {
  formData: object;
  setFormData: (newState: object) => void;
  getData: (newState: object) => void;
};

const initialValue = {
  formData: {},
  setFormData: () => { },
  getData: () => { }
};

interface FormContextProps {
  children: ReactNode;
};

export const FormContext = createContext<FormContextType>(initialValue);

export const FormContextProvider = ({ children }: FormContextProps) => {
  const [formData, setFormData] = useState(initialValue.formData);

  const getData = (data: {}) => {
    setFormData({ ...formData, ...data });
    console.log(formData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, getData }}>
      {children}
    </FormContext.Provider>
  )
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within the FormContextProvider');
  }
  return context;
};
