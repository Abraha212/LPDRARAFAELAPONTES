import ScrollReveal from './ScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="Instituto Dra. Raphaella Pontes"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.navContact}>
              <a href="tel:+5571994098952">(71) 99409-8952</a>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.heroContent}>
        <div className="container">
          <div className={`${styles.heroGrid} hero-grid`}>
            <ScrollReveal className={styles.heroText}>
              <h1 className={`${styles.headline} headline`}>
                Você luta contra distúrbios hormonais ou problemas de saúde que impactam seu bem-estar?
              </h1>
              <p className={`${styles.heroSubtitle} hero-subtitle`}>
                Eu sou a Dra Raphaella Pontes, médica com foco em perda de peso saudável e saúde hormonal e eu posso te ajudar.
              </p>
              <p className={`${styles.heroSubtext} hero-subtext`}>
                Sei que tomar a decisão de mudar seu estilo de vida pode ser desafiador mas estou aqui para te acompanhar nesse processo.
              </p>
              <a 
                href="https://wa.me/5571994098952?text=Olá! Gostaria de agendar uma consulta." 
                className="btn btn-primary"
              >
                Agendar consulta
              </a>
            </ScrollReveal>
            
            <ScrollReveal className={`${styles.heroImageWrapper} hero-image-wrapper`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/dra-hero.png" 
                alt="Dra. Raphaella Pontes"
                className={`${styles.heroImage} hero-image`}
              />
              <div className={styles.heroImageDecoration}></div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
