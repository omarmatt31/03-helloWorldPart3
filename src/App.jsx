import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion"

function App() {
  const mensaje  = "my friend"
  return (
    <>
      <h1><Informacion mensaje={mensaje}></Informacion></h1>
    </>
  )
}

export default App
