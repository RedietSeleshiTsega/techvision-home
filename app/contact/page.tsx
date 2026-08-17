"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { PageHeader } from "@/components/site/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"

const contactDetailIcons = { email: Mail, phone: Phone, office: MapPin }
const contactDetailKeys = ["email", "phone", "office"] as const

export default function ContactPage() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <PageHeader
        eyebrowKey="contactPage.eyebrow"
        titleKey="contactPage.title"
        descriptionKey="contactPage.description"
      />

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-foreground">{t("contactPage.talkDirectly")}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("contactPage.talkDirectlyDesc")}
            </p>
            <ul className="mt-8 space-y-5">
              {contactDetailKeys.map((key) => {
                const Icon = contactDetailIcons[key]
                return (
                  <li key={key} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{t(`contactPage.details.${key}.label`)}</p>
                      <p className="font-medium text-foreground">{t(`contactPage.details.${key}.value`)}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/60 p-6">
              <p className="font-medium text-foreground">{t("contactPage.workingHours")}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("contactPage.workingHoursValue")}
                <br />
                {t("contactPage.workingHoursNote")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{t("contactPage.received.title")}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                    {t("contactPage.received.description")}
                  </p>
                  <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setSubmitted(false)}>
                    {t("contactPage.received.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">{t("contactPage.form.name")}</Label>
                      <Input id="name" name="name" required placeholder={t("contactPage.form.namePlaceholder")} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">{t("contactPage.form.email")}</Label>
                      <Input id="email" name="email" type="email" required placeholder={t("contactPage.form.emailPlaceholder")} />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="org">{t("contactPage.form.org")}</Label>
                      <Input id="org" name="org" placeholder={t("contactPage.form.orgPlaceholder")} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="interest">{t("contactPage.form.interest")}</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder={t("contactPage.form.interestPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lms">{t("solutions.products.lms.short")}</SelectItem>
                          <SelectItem value="education-erp">{t("solutions.products.education-erp.short")}</SelectItem>
                          <SelectItem value="erp">{t("solutions.products.erp.short")}</SelectItem>
                          <SelectItem value="hr">{t("solutions.products.hr.short")}</SelectItem>
                          <SelectItem value="bundle">{t("contactPage.form.interestBundle")}</SelectItem>
                          <SelectItem value="other">{t("contactPage.form.interestOther")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">{t("contactPage.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contactPage.form.messagePlaceholder")}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    {t("contactPage.form.submit")}
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