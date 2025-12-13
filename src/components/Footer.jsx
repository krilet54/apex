import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import servicesData from '../data/services'
import logonew from '../assets/logo-new.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Centre', to: '/our-centre' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
]

export default function Footer() {
  const topServices = servicesData.slice(0, 5)

  return (
    <footer className="relative mt-16 overflow-hidden text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022313] via-[#043924] to-[#0B4D32]" aria-hidden />
      <div className="absolute -top-16 left-12 h-64 w-64 rounded-full bg-[#2AA56C]/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#0E3D28]/30 blur-3xl" aria-hidden />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-8 lg:py-10 grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* Logo + Social icons */}
        <div className="space-y-4">
          <div className="mx-auto flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-3xl bg-white/95 shadow-2xl shadow-[#0C3E26]/35 border border-white/60">
            <img
              src={logonew}
              alt="APEX crest"
              className="h-20 w-auto object-contain sm:h-24"
              loading="lazy"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://x.com/ApexExamCentre?t=TN59Wg11kTVXCZGH_-tSZA&s=08"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-[#6DE5A9]/20 transition"
              aria-label="Twitter / X"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/apexexamcentre?igsh=MXhjMmI5emI0OGU1eg=="
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-[#6DE5A9]/20 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@ApexExamCentre"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-[#6DE5A9]/20 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {topServices.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.slug}`} className="text-white/80 transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Quick Contact</p>
          <address className="not-italic mt-3 space-y-2 text-sm text-white/80">
            <div>
              Guru Harkrishan Public School<br />
              Vasant Vihar, New Delhi – 110057
            </div>
            <div>
              Phone:
              <div className="mt-1 space-y-1">
                <a href="tel:+919560553909" className="block font-semibold text-white hover:underline">
                  +91 9560553909
                </a>
                <a href="tel:+919560509196" className="block font-semibold text-white hover:underline">
                  +91 9560509196
                </a>
                <a href="tel:01135891079" className="block font-semibold text-white hover:underline">
                  011 3589 1079
                </a>
              </div>
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

      {/* Footer bottom */}
      <div className="relative border-t border-white/15 py-3 text-center text-xs text-white/75 space-x-1">
        <span>© {new Date().getFullYear()} APEX. All rights reserved.</span>
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
