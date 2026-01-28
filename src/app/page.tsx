import Hero from '@/components/Hero'
import Tratamentos from '@/components/Tratamentos'
import Diferenciais from '@/components/Diferenciais'
import Bio from '@/components/Bio'
import Clinica from '@/components/Clinica'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Hero />
      <Tratamentos />
      <Diferenciais />
      <Bio />
      <Clinica />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
