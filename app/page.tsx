import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="theme-transition flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <SiteFooter />
    </div>
  )
}
