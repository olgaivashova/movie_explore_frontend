import Promo from "./promo/Promo";
import AboutProject from "./aboutProject/AboutProject";
import Techs from "./techs/Techs";
import AboutMe from "./aboutMe/aboutMe";
import Portfolio from "./portfolio/Portfolio";

export default function Main() {
  return (
    <main className="main">
      <div className="main__introduction">
        <Promo />
      </div>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
