import { createContext } from 'react';

type CasesContextType = {
  cases: string[];
  createNewCase: (title: string) => void;
}

export const CasesContext = createContext({} as CasesContextType);