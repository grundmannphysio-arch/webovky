import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatWeDo from '@/components/WhatWeDo'
import Tools from '@/components/Tools'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Tools />
      <Footer />
    </main>
  )
}
