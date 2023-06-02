import Roteamento from "../router/router";
import { PageProvider } from "../src/contexts/pageContext";


function App() {
  return (
    <>
    <PageProvider>
      <Roteamento/>
    </PageProvider>
    </>
  )
}

export default App