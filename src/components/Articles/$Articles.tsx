import { ReactNode } from 'react';

import styles from './$Articles.module.scss';

export interface IArticlesProps {
  title: string | ReactNode | ReactNode[];
  description: string | ReactNode | ReactNode[];
  href: string;
  color: string | undefined;
}

export function Articles({ href, title, color, description }: IArticlesProps) {
  return (
    <a className={styles['article']} href={href}>
      <article className={styles['article__container']}>
        <div className={styles['article__image']} style={{ backgroundColor: color }} />

        <div className={styles['article__content']}>
          <h3
            className={`${styles['article__title']} font-family-200 weight-700 clr-gray-400`}
          >
            {title}
          </h3>
          <p
            className={`${styles['article__description']} font-family-100 weight-400 clr-gray-300`}
          >
            {description}
          </p>
        </div>
      </article>
    </a>
  );
}
