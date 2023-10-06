import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section id="aboutProject" className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__description">
        <h3 className="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timing">
        <p className="about-project__timing-text">1 неделя</p>
        <p className="about-project__timing-text">4 недели</p>
        <span className="about-project__timing-text">Back-end</span>
        <span className="about-project__timing-text">Front-end</span>
      </div>
    </section>
  );
}
