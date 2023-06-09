import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/pageContext";
import LayoutDefault from "../layout/LayoutDefault";
import AboutHome from "../components/about";

function About() {

  const {ActivePage} = useContext(PageContext)

  useEffect(()=>{
    ActivePage('Sobre');
  },[])

    return (
        <>
          <LayoutDefault>
              <AboutHome/>
          </LayoutDefault>
        </>
    )
}

export default About