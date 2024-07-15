import { Element } from "react-scroll";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Clients from "./pages/clients";
import Advantages from "./pages/advantages";

import { Airlines } from "./components/Airlines";
import { Secutiry } from "./components/Security";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <main className="main-container">
      <Element name="home">
        <Home />
      </Element>
      <Airlines />
      <Element name="quem-somos">
        <AboutUs />
      </Element>
      <Element name="clientes">
        <Clients />
      </Element>
      <Element name="vantagens">
        <Advantages />
      </Element>
      <Secutiry />
    </main>
  );
}

export default App;
