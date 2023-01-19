import './styles/index.scss';

import illustrationImg from './assets/illustration.svg';
import { Articles, IArticlesProps } from './components/Articles';

type IAppArticlesProps = IArticlesProps;

const colors = ['#FF6363', '#63ECFF', '#F363FF', '#63FF73', '#FFDD63', '#6663FF'];

export function App() {
  const articles: IAppArticlesProps[] = Array(6).fill({
    title: 'Título do card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
    href: '/',
  });

  console.log(articles);

  return (
    <main className="l-main">
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

      <section className="features">
        <div className="features__container container">
          <ul className="features__list">
            {articles.map((article, index) => {
              article.color = colors[index];

              return (
                <li className="features__item" key={article.color}>
                  <Articles {...article} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
