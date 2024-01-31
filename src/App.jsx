import { BrowserRouter } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import TelaRegistro from "./pages/TelaRegistro/TelaRegistro";
import { Router } from "./router/routes";

 


function App() {
  // return (
  //   <div className="bg-[#c8ccdc] w-max-[1800px]">
  //  {router}
  // </div>
  // )
  // return router;
  return(
    <BrowserRouter>
      <Router />
    
    </BrowserRouter>
  );
}

export default App
