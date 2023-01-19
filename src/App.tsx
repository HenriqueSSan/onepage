import './styles/index.scss';

import illustrationImg from './assets/illustration.svg';

export function App() {
  return (
    <main className="l-main">
      <section className="hero">
        <div className="hero__container d-flex align-items-center justify-between">
          <div className="hero__texts">
            <h1 className="hero__title">Lorem ipsum dolor sit amet</h1>

            <p className="hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa
              sit amet augue consectetur ullamcorper non ac massa.
            </p>

            <button className="btn" type="button" data-primary>
              Botão
            </button>
          </div>

          <figure className="hero__figure">
            <img
              className="hero__image"
              src={illustrationImg}
              alt="Ilustração no inicio da página"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
