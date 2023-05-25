import { useState } from "react"
import { useContext } from 'react';
import menuContext from '../src/contexts/menuContext'
import LayoutDefault from "./layout/LayoutDefault";
import Home from "./components/home";

function App() {
  const [pagePreview, setpagePreview] = useState(false);
  return (
    <>
      <menuContext.Provider value={{page: setpagePreview}}/>
      <LayoutDefault>
          <Home/>
      </LayoutDefault>
    </>
  )
}

export default App