import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>BEARable Apples</>,
    imageUrl: 'img/logo.jpg',
    url: 'https://ldjam.com/events/ludum-dare/46/bearable-apples',
    theme: 'Keep It Alive',
    description: (
      <>
        A game focused around a koala trying to keep an apple tree alive.
      </>
    ),
  }
];

function Feature({imageUrl, title, description, theme}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>Theme: {theme}</p>
      <p>{description}</p>
    </div>
  );
}

function GameProjects() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`My Game Projects`}
      description="A portfolio of my game projects">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Game Projects</h1>
          <p className="hero__subtitle">I make games for Ludum Dare - a 72 hr small team competition.</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default GameProjects;
