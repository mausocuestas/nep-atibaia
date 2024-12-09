import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Manual NEP',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Passoa a passo para solicitação de estágios e visitas técnicas
      </>
    ),
    link: 'docs/intro',
  },
  {
    title: 'Novas Solicitações',
    Svg: require('@site/static/img/plane-take-off.svg').default,
    description: (
      <>
        Crie e submeta novas solicitações de estágio na área da saúde.
      </>
    ),
    link: 'docs/intro',
  },
  {
    title: 'POPs',
    Svg: require('@site/static/img/logic-flow.svg').default,
    description: (
      <>
        Aqui você encontra os Procedimentos Operacionais Padrão
      </>
    ),
    link: 'docs/intro',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={clsx(styles.featureLink, styles.featureCard)}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
