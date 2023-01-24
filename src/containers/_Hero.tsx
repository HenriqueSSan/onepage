import illustrationImg from '../assets/illustration.svg';

export function Hero() {
  return (
    <section className="hero bg-gray-200">
      <div className="hero__container container d-flex align-items-center justify-between flex-dir-col">
        <div className="hero__texts">
          <h1 className="hero__title font-family-200 weight-700 clr-gray-400">
            Lorem ipsum dolor <br />
            sit amet
          </h1>

          <p className="hero__description font-family-100 weight-400 clr-gray-300">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Maecenas eu
            massa sit amet <br /> augue consectetur ullamcorper non ac massa.
          </p>

          <button className="btn font-family-100 weight-700" type="button" data-primary>
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
  );
}
