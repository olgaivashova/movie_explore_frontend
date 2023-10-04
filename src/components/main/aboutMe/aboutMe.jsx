import "./AboutMe.css";
import photo from "../../../images/myPhoto.jpg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__cv">
        <div className="about-me__description">
          <h3 className="about-me__name">Ольга</h3>
          <p className="about-me__data">Фронтенд-разработчик, 42 года</p>
          <p className="about-me__text">
            Я живу со своей семьей в Москве, закончила факультет иностранных
            языков ВГПУ. У меня двое детей. Я люблю слушать музыку и шить для
            своей дочери костюмы для художественной гимнастики. Недавно начала
            кодить с 0 и мечтаю найти работу в IT-сфере. До этого преподавала
            немецкий и английский языки.
          </p>
          <a
            href="https://github.com/olgaivashova/"
            className="about-me__github-link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="фотография студента"
        />
      </div>
    </section>
  );
}
