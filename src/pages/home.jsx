import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/pageContext";
import LayoutDefault from "../layout/LayoutDefault";
import IndexHome from "../components/home/index";

function Home() {

  const {ActivePage} = useContext(PageContext)

  useEffect(()=>{
    ActivePage('Home');
  },[])
  
    return (
        <>
          <LayoutDefault>
              <IndexHome/>
          </LayoutDefault>
        </>
    )
}

export default Home