import React from 'react'
import { Link } from 'react-router-dom'
import logoPrimary from '../assets/images/L2.png'
import logoSecondary from '../assets/images/L3.png'
import servicesData from '../data/services'
import logonew from '../assets/logo-new.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Centre', to: '/our-centre' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
]

export default function Footer() {
  const topServices = servicesData.slice(0, 5)

  return (
    <footer className="relative mt-16 overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B4B00] via-[#D99201] to-[#F7C87D]" aria-hidden />
      <div className="absolute -top-16 left-12 h-64 w-64 rounded-full bg-white/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#612C00]/30 blur-3xl" aria-hidden />

      <div className="relative container mx-auto px-6 py-16 lg:py-20 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Apex Examination Services</p>
          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl shadow-[#8A4E00]/35 border border-white/60">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
              <img src={logonew} alt="Apex crest" className="h-11 w-auto object-contain sm:h-12" loading="lazy" />
              <span className="h-px w-16 bg-[#F6C567]/70 sm:h-14 sm:w-px" aria-hidden />
              <img src={logoSecondary} alt="Apex emblem" className="h-11 w-auto object-contain sm:h-12" loading="lazy" />
            </div>
            <p className="mt-5 text-sm text-[#1A1A1A]">
              Examination infrastructure, trained manpower, and secure operations delivered through a unified centre.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Pages</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {topServices.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.slug}`} className="text-white/80 transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Quick Contact</p>
          <address className="not-italic mt-5 space-y-3 text-sm text-white/80">
            <div>
              Guru Harkrishan Public School<br />
              Vasant Vihar, New Delhi – 110057
            </div>
            <div>
              Phone:{' '}
              <a href="tel:+919560553909" className="font-semibold text-white hover:underline">
                +91 95605 53909
              </a>
            </div>
            <div>
              Email:{' '}
              <a href="mailto:apexexamcentre@gmail.com" className="font-semibold text-white hover:underline">
                apexexamcentre@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-5 text-center text-xs text-white/75 space-x-1">
        <span>© {new Date().getFullYear()} Apex Examination Services. All rights reserved.</span>
        <span>
          Made by{' '}
          <a
            href="https://micro-site.studio/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline"
          >
            Microsite Studio
          </a>
        </span>
      </div>
    </footer>
  )
}
