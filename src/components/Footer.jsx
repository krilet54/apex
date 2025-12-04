import React from 'react'
import { Link } from 'react-router-dom'
import logoPrimary from '../assets/images/L2.png'
import logoSecondary from '../assets/images/L3.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Centre', to: '/our-centre' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1410] text-white mt-16">
      <div className="container mx-auto px-6 py-12 lg:py-16 grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <img src={logoPrimary} alt="Apex crest" className="h-12 w-auto" loading="lazy" />
            <img src={logoSecondary} alt="Apex emblem" className="h-12 w-auto" loading="lazy" />
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-sm">
            Government-grade examination centres, manpower and secure operations delivered under one programme office in New Delhi.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/80 hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Contact</p>
          <address className="not-italic mt-4 text-sm text-white/80 space-y-3">
            <div>
              Guru Harkrishan Public School<br />
              Vasant Vihar, New Delhi – 110057
            </div>
            <div>
              Phone:{' '}
              <a href="tel:+919560553909" className="text-white font-semibold hover:underline">
                +91 95605 53909
              </a>
            </div>
            <div>
              Email:{' '}
                <a href="mailto:tusharsales@gmail.com" className="text-white font-semibold hover:underline">
                  tusharsales@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70 space-x-1">
        <span>© {new Date().getFullYear()} Apex Infrastructure Services. All rights reserved.</span>
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
