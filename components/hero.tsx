import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { NetworkVisualization } from '@/components/network-visualization'
import { ContactModal } from '@/components/contact-modal'
import { socials } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden scroll-mt-16"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center gap-12 px-4 py-24 sm:px-6 md:py-32">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Tersedia untuk proyek freelance & full-time
          </span>

          <h1 className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Halo, saya seorang{' '}
            <span className="text-primary">Software Engineer</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saya fokus pada pengembangan solusi digital yang fungsional. Saya merancang dan membangun aplikasi web yang responsif dan terstruktur, menangani proses pengembangan secara komprehensif dari tahap perencanaan awal hingga tahap produksi.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyek"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Lihat Proyek
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <ContactModal
              triggerClassName="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            />
          </div>

          <dl className="mt-10 grid w-full max-w-sm grid-cols-2 gap-6 border-t border-border pt-8">
            {[
              { value: '1+', label: 'Tahun pengalaman' },
              { value: '3+', label: 'Proyek selesai' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right - Network Visualization */}
        <div className="hidden lg:flex flex-1 items-center justify-center h-96">
          <div className="w-full h-full rounded-lg border border-border/50 bg-linear-to-b from-primary/5 to-background overflow-hidden">
            <NetworkVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
