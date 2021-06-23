import React, { createContext, useState } from 'react'
import useSearchOrder from '../hooks/useSearchOrder';


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const { loading, isValidRefNum, data, isDisabled, referenceNumber, setReferenceNumber, searchWithReferenceNumber } = useSearchOrder();  
  return (
    <SearchContext.Provider value={{loading, isValidRefNum, data, isDisabled, referenceNumber, setReferenceNumber, searchWithReferenceNumber}}> 
      {children}
    </SearchContext.Provider>
  );
}