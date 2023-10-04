import React from "react";
import './NotFoundError.css';
import { Link, useNavigate } from "react-router-dom";

export default function NotFoundError() {
  const navigation = useNavigate();

  return (
    <main>
      <section className="error-page">
        <h2 className="error-page__number">404</h2>
        <p className="error-page__text">Страница не найдена</p>
        <Link onClick={() => navigation(-1)} className="error-page__link">
          Назад
        </Link>
      </section>
    </main>
  );
}
