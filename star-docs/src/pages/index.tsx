import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {ReactElement} from "react";

import {translate} from '@docusaurus/Translate';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"><Translate>websiteTagline</Translate></p>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  return (
    <Layout
      description={translate({id: "websiteDescription"})}>
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}
