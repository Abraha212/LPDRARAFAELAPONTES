import ScrollReveal from './ScrollReveal'
import styles from './Diferenciais.module.css'

const diferenciais = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
    title: 'Atendimento humanizado e personalizado',
    description: 'Uma equipe está sempre pronta para acolher e escutar suas preocupações.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
    ),
    title: 'Acesso direto e fácil',
    description: 'Disponibilizamos nosso WhatsApp pessoal para garantir que você tenha suporte a qualquer momento.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    ),
    title: 'Localização estratégica',
    description: 'Localizados em um shopping center, proporcionando segurança e fácil acesso para você.',
  },
]

export default function Diferenciais() {
  return (
    <section className={styles.diferenciais} id="diferenciais">
      <div className="container">
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Muito além do tratamento</h2>
          </div>
        </ScrollReveal>

        <div className={`${styles.diferenciaisGrid} diferenciais-grid`}>
          {diferenciais.map((diferencial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className={styles.diferencialItem}>
                <div className={styles.diferencialIcon}>
                  {diferencial.icon}
                </div>
                <h3>{diferencial.title}</h3>
                <p>{diferencial.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className={styles.diferenciaisCta}>
            <a 
              href="https://wa.me/5571994098952?text=Olá! Gostaria de mais informações sobre a consulta." 
              className="btn btn-primary"
            >
              Quero mais informações sobre a consulta
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
