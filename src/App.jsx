import { useState } from "react"
import menuContext from "./contexts/menuContext"
import Home from "./pages/home"
function App() {
  const [pagePreview, setpagePreview] = useState(false);
  return (
    <>
      <menuContext.Provider value={{page: 'teste'}}/>
       <Home/>
    </>
  )
}

export default App