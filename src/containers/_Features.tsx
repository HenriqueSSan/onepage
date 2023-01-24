import { Articles, IArticlesProps } from '../components/Articles';

type IAppArticlesProps = IArticlesProps;

export function Features() {
  const colors = ['#FF6363', '#63ECFF', '#F363FF', '#63FF73', '#FFDD63', '#6663FF'];

  const articles: IAppArticlesProps[] = Array(6).fill({
    title: 'Título do card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
    href: '/',
  });

  return (
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
  );
}
