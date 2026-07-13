'use client'

import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon } from '@/components/brand-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  projectCategories,
  projects,
  type Project,
} from '@/lib/portfolio-data'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Card className="group/card cursor-pointer gap-0 p-0 transition-all duration-300 hover:-translate-y-1.5 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col" />
        }
      >
        <div className="relative aspect-video overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image || '/placeholder.svg'}
            alt={`Tampilan antarmuka proyek ${project.title}`}
            className="size-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          <span className="absolute left-3 top-3">
            <Badge variant="secondary" className="backdrop-blur-sm">
              {project.category}
            </Badge>
          </span>
        </div>
        <CardHeader className="gap-1.5 p-5">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <CardDescription className="text-pretty leading-relaxed">
            {project.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3 p-5 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <Badge key={t} variant="outline" className="font-normal">
                {t}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border border-border bg-muted text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <GithubIcon className="size-3.5" />
            Lihat di GitHub
          </a>
        </CardContent>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <div className="-mx-4 -mt-4 overflow-hidden rounded-t-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image || '/placeholder.svg'}
            alt={`Tampilan antarmuka proyek ${project.title}`}
            className="aspect-video w-full object-cover"
          />
        </div>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle className="text-xl">{project.title}</DialogTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <DialogDescription className="text-pretty leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Fitur utama</p>
          <ul className="space-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <GithubIcon className="size-4" />
            Source Code
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Projects() {
  const [active, setActive] = useState<string>('Semua')

  return (
    <section id="proyek" className="scroll-mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portofolio
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Proyek pilihan
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Kumpulan produk yang saya rancang dan kembangkan — pilih kategori
            untuk memfilter, dan klik kartu untuk melihat detailnya.
          </p>
        </div>

        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as string)}
          className="mt-10 gap-8"
        >
          <TabsList className="h-auto flex-wrap justify-start gap-1 bg-transparent p-0">
            {projectCategories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="h-9 rounded-lg border border-border bg-card px-4 data-active:border-primary data-active:bg-primary data-active:text-primary-foreground"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectCategories.map((cat) => {
            const list =
              cat === 'Semua'
                ? projects
                : projects.filter((p) => p.category === cat)
            return (
              <TabsContent key={cat} value={cat}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
