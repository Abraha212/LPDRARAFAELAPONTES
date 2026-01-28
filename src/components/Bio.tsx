import ScrollReveal from './ScrollReveal'
import styles from './Bio.module.css'

export default function Bio() {
  return (
    <section className={styles.bio} id="sobre">
      <div className="container">
        <div className={`${styles.bioGrid} bio-grid`}>
          <ScrollReveal className={styles.bioImageWrapper}>
            {/* SELETOR: bio-image - Insira a foto da Dra aqui */}
            <div className={`${styles.bioImage} bio-image`}></div>
            <div className={styles.bioDecoration}></div>
          </ScrollReveal>

          <ScrollReveal className={styles.bioContent}>
            <h2>Dra. Raphaella Pontes</h2>
            <p>
              Há 12 anos na medicina, construí uma trajetória dedicada ao cuidado integral da saúde. 
              Minha formação começou na graduação em Medicina, seguida de uma pós-graduação no Hospital 
              Israelita Albert Einstein, uma das instituições mais renomadas do país.
            </p>
            <p>
              Ao longo desses anos, desenvolvi uma abordagem que vai além do tratamento de sintomas. 
              Acredito que cada paciente merece um olhar individualizado, considerando não apenas suas 
              queixas, mas todo o contexto de sua vida, hábitos e objetivos.
            </p>
            <p>
              Minha especialização em saúde hormonal e perda de peso saudável nasceu da percepção de 
              que muitos problemas de saúde estão interligados. Um desequilíbrio hormonal pode afetar 
              o peso, a disposição, o humor e a qualidade de vida como um todo.
            </p>
            
            <div className={styles.bioHighlight}>
              <p>
                &ldquo;O objetivo da minha clínica é proporcionar um atendimento que realmente transforme 
                vidas, com ciência, empatia e dedicação a cada pessoa que confia em mim.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
