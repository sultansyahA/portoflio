'use client'

import { useEffect, useState } from 'react'
import { Code2 } from 'lucide-react'

const techStack = ['Next.js', 'React.js', 'Laravel', 'Flutter', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'REST API']

export function NetworkVisualization() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('id-ID', { hour12: false }))

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('id-ID', { hour12: false }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 h-full w-full md:grid-cols-2">
      {/* Box 1 - Tech Stack Marquee */}
      <div className="rounded-xl border border-border bg-card p-4 overflow-hidden flex items-center">
        <div className="flex items-center gap-2 w-full">
          <Code2 className="size-4 text-primary shrink-0" />
          <div className="overflow-hidden flex-1">
            <div className="flex gap-4 animate-scroll">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-muted-foreground whitespace-nowrap hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Box 2 - Location Map with Ping */}
      <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-auto">
        {/* Background map SVG (minimalist) */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" opacity="0.5" />
        </svg>

        {/* Center marker with ping animation */}
        <div className="relative z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-primary rounded-full animate-ping opacity-75" />
          </div>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>

        {/* Location label */}
        <div className="absolute bottom-3 left-3 right-3 text-center z-10">
          <p className="text-xs font-semibold text-primary">Sragen, Indonesia</p>
          <p className="text-xs text-muted-foreground">-7.4265, 111.0056</p>
        </div>
      </div>

      {/* Box 3 - Digital Clock */}
      <div className="rounded-xl border border-border bg-card p-4 flex items-center justify-center md:col-span-2">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold font-mono text-primary tracking-tighter">
            {time || '00:00:00'}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Waktu Setempat</p>
          <div className="mt-3 flex gap-2 justify-center">
            {time.split(':').map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-xs text-muted-foreground font-semibold">
                  {i === 0 ? 'JAM' : i === 1 ? 'MENIT' : 'DETIK'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
