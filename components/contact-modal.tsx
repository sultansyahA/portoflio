'use client'

import emailjs from '@emailjs/browser'
import { Mail } from 'lucide-react'
import { useRef, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ContactModalProps {
  triggerClassName?: string
}

export function ContactModal({ triggerClassName }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = formRef.current
    if (!form) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(form)
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')

    const templateParams = {
      from_name: email.split('@')[0] || 'Portfolio Visitor',
      reply_to: email,
      user_email: email,
      email,
      message,
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
      )

      setSubmitStatus('success')
      form.reset()
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClassName}
      >
        <Mail className="size-4" />
        Hubungi Saya
      </button>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Kirim Pesan</DialogTitle>
          <DialogDescription>
            Isi form di bawah untuk mengirim pesan kepada saya
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Anda <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nama@email.com"
              required
              disabled={isSubmitting}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Pesan <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              required
              disabled={isSubmitting}
              rows={5}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 rounded-lg border border-green-500/50 bg-green-500/10 px-3 py-2">
              <div className="size-1.5 rounded-full bg-green-500" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Pesan berhasil dikirim! Terima kasih.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/50 bg-red-500/10 px-3 py-2">
              <div className="size-1.5 rounded-full bg-red-500" />
              <p className="text-sm text-red-700 dark:text-red-400">
                Gagal mengirim pesan. Silakan coba lagi.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
