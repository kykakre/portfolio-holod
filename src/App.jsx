import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx"
import MainContainer from "./Views/MainContainer";
import PortfolioContainer from "./Views/PortfolioContainer.jsx";
import ContactContainer from "./Views/ContactContainer.jsx";
import "./style/style.scss";

function App() {

  return (
      <BrowserRouter>

          <div className="">
              <Header/>
              <Routes>
                  <Route path="" element={<MainContainer/>}/>
                  <Route path="/portfolio" element={<PortfolioContainer/>}/>
                  <Route path="/contacts" element={<ContactContainer/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  )
}

export default App
