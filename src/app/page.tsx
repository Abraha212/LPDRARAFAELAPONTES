import Hero from '@/components/Hero'
import Tratamentos from '@/components/Tratamentos'
import Diferenciais from '@/components/Diferenciais'
import Bio from '@/components/Bio'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Hero />
      <Tratamentos />
      <Diferenciais />
      <Bio />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
