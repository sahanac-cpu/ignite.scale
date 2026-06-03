import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ServicesTeaser from '@/components/ServicesTeaser'
import WorkTeaser from '@/components/WorkTeaser'
import ProcessTeaser from '@/components/ProcessTeaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesTeaser />
      <WorkTeaser />
      <ProcessTeaser />
    </>
  )
}
