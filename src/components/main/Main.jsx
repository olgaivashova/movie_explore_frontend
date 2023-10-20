import Promo from "./promo/Promo";
import AboutProject from "./aboutProject/AboutProject";
import Techs from "./techs/Techs";
import AboutMe from "./aboutMe/aboutMe";
import Portfolio from "./portfolio/Portfolio";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <>
      <Header name="main"/>
      <main className="main">
        <div className="main__introduction">
          <Promo/>
        </div>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  );
}
