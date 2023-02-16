import { createContext, ReactNode, useContext, useState } from 'react';
import { AssessmentDTO } from '@dtos/AssessmentDTO';

type FormContextType = {
  formData: AssessmentDTO;
  getData: (newState: object) => void;
};

const initialValue = {
  formData: {} as AssessmentDTO,
  getData: () => { }
};

interface FormContextProviderProps {
  children: ReactNode;
};

export const FormContext = createContext<FormContextType>(initialValue);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formData, setFormData] = useState<AssessmentDTO>({} as AssessmentDTO);

  const getData = (data: {}) => {
    setFormData({ ...formData, ...data });
    console.log(formData);
  };

  return (
    <FormContext.Provider value={{ formData, getData }}>
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
