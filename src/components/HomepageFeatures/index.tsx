import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Objetivo',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Estágio na área da saúde é onde o conhecimento se transforma 
        em cuidado, e a teoria ganha vida no bem-estar de cada paciente.
      </>
    ),
  },
  {
    title: 'Benefícios',
    Svg: require('@site/static/img/plane-take-off.svg').default,
    description: (
      <>
        O estágio na saúde é o momento em que você cresce não apenas como profissional, 
        mas como ser humano, aprendendo a salvar vidas enquanto constrói a sua própria carreira.
      </>
    ),
  },
  {
    title: 'Suporte',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
        No estágio na área da saúde, você não caminha sozinho – é guiado por profissionais 
        experientes que oferecem apoio, conhecimento e a confiança necessária para enfrentar desafios reais.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
