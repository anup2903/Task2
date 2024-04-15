// DataContext.tsx
import React, { createContext, useState, useContext } from 'react';

// Define the shape of your shared data
interface FormData {
  requisitionTitle: string;
  noOfOpenings: number;
  urgency: string;
  gender: string;
}

// Create the context
const DataContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
} | undefined>(undefined);

// Create a provider component
export const DataProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });

  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};
// Custom hook to consume the context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
