import ScrollReveal from './ScrollReveal'
import styles from './Tratamentos.module.css'

const tratamentos = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
    title: 'Tratamentos para o Sobrepeso e Obesidade',
    description: 'Acompanhamento médico para o manejo do sobrepeso com programas individualizados que consideram as necessidades de cada paciente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    ),
    title: 'Saúde Hormonal',
    description: 'Avaliação e tratamento de deficiências hormonais por todas as vias, com prescrição individualizada após consulta médica.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>
    ),
    title: 'Tratamento da Sarcopenia',
    description: 'Orientação médica para o desenvolvimento de massa muscular com acompanhamento profissional.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
    ),
    title: 'Tratamento de Lipedema',
    description: 'Diagnóstico e tratamento do lipedema, com base em avaliação clínica e intervenções médicas personalizadas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
    ),
    title: 'Terapias Injetáveis',
    description: 'Administração de terapias injetáveis sob indicação e supervisão médica.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>
    ),
    title: 'Baixa Disposição',
    description: 'Investigação das causas de baixa disposição, com foco no diagnóstico e tratamento individualizado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
    title: 'Distúrbios Sexuais',
    description: 'Avaliação das causas, com proposta de intervenções personalizadas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    ),
    title: 'Menopausa',
    description: 'Manejo dos sintomas da menopausa, com acompanhamento médico e tratamento individualizado.',
  },
]

export default function Tratamentos() {
  return (
    <section className={styles.tratamentos} id="tratamentos">
      <div className="container">
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} section-title`}>Como posso ajudar?</h2>
            <p className={styles.sectionSubtitle}>Tratamentos personalizados para sua saúde e bem-estar</p>
          </div>
        </ScrollReveal>

        <div className={`${styles.tratamentosGrid} tratamentos-grid`}>
          {tratamentos.map((tratamento, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`${styles.tratamentoCard} tratamento-card`}>
                <div className={styles.tratamentoIcon}>
                  {tratamento.icon}
                </div>
                <h3>{tratamento.title}</h3>
                <p>{tratamento.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
