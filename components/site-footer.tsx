'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactModal } from '@/components/contact-modal'
import { socials } from '@/lib/portfolio-data'

const socialLinks = [
  { label: 'GitHub', href: socials.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: socials.linkedin, icon: LinkedinIcon, external: true },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="kontak" className="scroll-mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 sm:px-6">
        <div className="flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Mari bekerja sama
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Punya ide proyek atau sekadar ingin menyapa? Saya selalu terbuka
            untuk obrolan baru.
          </p>
          <ContactModal
            triggerClassName="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          />
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} Sultan Syah. Dibuat dengan Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
