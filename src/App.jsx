import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import Home from "./pages/home";
// import Conditions from "./pages/Conditions";





const App = () => {
  return (
    <section>
     {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/auth" element={<AuthPage />} />
     
     </Routes> */}
      <Home />
    </section> 
  );
};

export default App;