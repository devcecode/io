import { createContext, useState } from "react";

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {

  const [ theme, setTheme ] = useState('light')
  return (
    <ContextData.Provider value={{
      theme,
      setTheme
    }}>
      { children }
    </ContextData.Provider>
  )
}