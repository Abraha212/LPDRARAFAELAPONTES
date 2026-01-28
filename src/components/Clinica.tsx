import ScrollReveal from './ScrollReveal'
import styles from './Clinica.module.css'

export default function Clinica() {
  return (
    <section className={styles.clinica} id="clinica">
      <div className="container">
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Conheça nossa clínica</h2>
            <p className={styles.sectionSubtitle}>Um espaço pensado para o seu conforto e bem-estar</p>
          </div>
        </ScrollReveal>

        <div className={styles.gallery}>
          <ScrollReveal className={styles.galleryItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/clinica-1.png" 
              alt="Fachada da Clínica Instituto Dra. Raphaella Pontes"
              className={styles.galleryImage}
            />
          </ScrollReveal>
          
          <ScrollReveal className={styles.galleryItem} delay={100}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/clinica-2.png" 
              alt="Recepção da Clínica"
              className={styles.galleryImage}
            />
          </ScrollReveal>
          
          <ScrollReveal className={styles.galleryItem} delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/clinica-3.png" 
              alt="Sala de Espera da Clínica"
              className={styles.galleryImage}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
