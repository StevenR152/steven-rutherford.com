import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Who am I?</>,
    imageUrl: 'img/logo.jpg',
    description: (
      <>
        I'm a kiwi born and bread, have explored over 30 countries. When I'm needing a break from the tech scene, I love to get out hiking in nature.
      </>
    ),
  },
  {
    title: <>What do I do?</>,
    imageUrl: 'img/techstack.png',
    description: (
      <>
        My professional technology toolkit focuses on Java, Microservices Architecture, AWS, Terraform, Docker, Kubernetes and Jenkins/CircleCI. But I've hacked about in other scripts as projects require.
      </>
    ),
  },
  {
    title: <>Want to learn tech?</>,
    imageUrl: 'img/codersmeetup.PNG',
    description: (
      <>
        I supplement my professional career with teaching, having organised a 1200+ member meetup.com group called CodersUK helping people navigate their tech career and grow in hands on learning workshops.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog')}>
              Technical Blog Posts
            </Link>
          </div>
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

export default Home;
