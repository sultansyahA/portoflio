'use client'

import { Code2, Smartphone, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const specializations = [
  {
    icon: Code2,
    title: 'Pengembangan Full-Stack',
    description:
      'Membangun frontend yang interaktif menggunakan React.js dan Next.js, serta merancang arsitektur backend yang robust dengan Laravel dan REST API.',
  },
  {
    icon: Smartphone,
    title: 'Pengembangan Mobile',
    description:
      'Membuat aplikasi mobile lintas platform (cross-platform) yang efisien menggunakan Flutter dan Expo.',
  },
  {
    icon: Zap,
    title: 'Penyelesaian Logika Bisnis',
    description:
      'Berpengalaman dalam menerjemahkan logika bisnis dunia nyata ke dalam sistem digital, seperti sistem manajemen stok gudang, otomatisasi billing waktu, dan aplikasi Point of Sales (POS).',
  },
]

const techStack = {
  Frontend: ['Next.js', 'React.js', 'JavaScript', 'HTML', 'CSS'],
  'Backend & API': ['Laravel', 'Python (Flask)', 'REST API'],
  Database: ['MySQL'],
  Mobile: ['Flutter', 'Dart', 'Expo'],
  Tools: ['Git', 'GitHub', 'VS Code'],
}

const education = [
  {
    degree: 'S1 Teknik Informatika',
    school: 'Universitas Duta Bangsa Surakarta',
    period: '2023 - Sekarang',
    focus: [
      'Pemrograman Web',
      'Pemrograman Mobile',
      'Rekayasa Perangkat Lunak',
      'Algoritma dan Struktur Data',
      'Basis Data',
    ],
  },
  {
    degree: 'Teknik Komputer & Jaringan',
    school: 'SMK Sakti Gemolong',
    period: '2020 - 2023',
  },
]

export function About() {
  return (
    <section className="scroll-mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Tentang Saya
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Bio */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Sultan Syah Afriyadi</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Halo! Saya adalah mahasiswa Teknik Informatika semester 6 di Universitas Duta Bangsa Surakarta. Saya memiliki minat besar dan rekam jejak aktif dalam pengembangan aplikasi{' '}
                  <span className="font-semibold text-primary">web</span> serta{' '}
                  <span className="font-semibold text-primary">mobile</span>. Saya berdedikasi untuk berkontribusi sebagai{' '}
                  <span className="font-semibold text-primary">software developer</span> yang solutif, adaptif, dan mampu berkomunikasi dengan baik di dalam tim profesional.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - All Other Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Fokus & Spesialisasi */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Fokus & Spesialisasi</h3>
              <div className="grid gap-4 sm:grid-cols-1">
                {specializations.map((spec) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={spec.title}
                      className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                      <div className="mb-3 flex items-start gap-3">
                        <div className="mt-1 rounded-lg bg-primary/10 p-2">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{spec.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Tumpukan Teknologi</h3>
              <div className="space-y-4">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Latar Belakang Pendidikan</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                        <p className="text-xs text-muted-foreground">{edu.school}</p>
                      </div>
                      <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    {edu.focus && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Fokus Studi
                        </p>
                        <ul className="space-y-1">
                          {edu.focus.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
