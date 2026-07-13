import {
  BrainCircuit,
  CircuitBoard,
  Database,
  MonitorSmartphone,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { skillGroups } from '@/lib/portfolio-data'

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Server,
  Database,
  BrainCircuit,
  CircuitBoard,
  Wrench,
}

export function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Kemampuan
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills &amp; Teknologi
          </h2>
          <span className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Wrench
            return (
              <article
                key={group.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <Badge variant="secondary" className="font-medium">
                    {group.level}
                  </Badge>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {group.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
