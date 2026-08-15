"use client"

import type React from "react"

import { useState } from "react"
import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { PageHeader } from "@/components/site/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@techvision.et" },
  { icon: Phone, label: "Phone", value: "+251 11 234 5678" },
  { icon: MapPin, label: "Office", value: "Bole Road, Addis Ababa, Ethiopia" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <PageHeader
        eyebrow="Contact"
        title="Let's build something that works for your team"
        description="Tell us about your organization and what you want to improve. Our team will get back to you within one business day."
      />

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-foreground">Talk to us directly</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Prefer a conversation? Reach out through any of the channels below and we&apos;ll connect you
              with the right specialist.
            </p>
            <ul className="mt-8 space-y-5">
              {contactDetails.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <d.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{d.label}</p>
                    <p className="font-medium text-foreground">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/60 p-6">
              <p className="font-medium text-foreground">Working hours</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Monday – Friday: 2:30 AM – 11:30 AM (EAT)
                <br />
                Local support team based in Addis Ababa.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">Message received</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. A member of the TechVision team will contact you within one
                    business day.
                  </p>
                  <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" required placeholder="Abebe Kebede" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="org">Organization</Label>
                      <Input id="org" name="org" placeholder="Your school or company" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="interest">Interested in</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lms">LMS</SelectItem>
                          <SelectItem value="education-erp">Education ERP</SelectItem>
                          <SelectItem value="erp">Business ERP</SelectItem>
                          <SelectItem value="hr">HR Management</SelectItem>
                          <SelectItem value="bundle">A bundle</SelectItem>
                          <SelectItem value="other">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your team size, current tools, and what you'd like to improve."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
