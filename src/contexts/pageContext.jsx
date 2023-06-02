import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({children}) => {

  const [pageActive, setPageActive] = useState('Home')

  const ActivePage = (event) => {
    setPageActive(event)
  }

  return <PageContext.Provider value={{pageActive,ActivePage}}>
        {children}
  </PageContext.Provider>
}