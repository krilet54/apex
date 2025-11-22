import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#fffaf3] border-t border-[#D99201]/20 mt-16">
      {/* Top Footer Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        
        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[#1A3F22] text-lg">Contact</h4>
          <address className="not-italic mt-3 text-sm text-[#58761B] leading-relaxed">
            Guru Harkrishan Public School<br />
            Vasant Vihar, New Delhi - 110057<br />
            Phone: <a href="tel:9560553909" className="text-[#905A01] hover:underline">9560553909</a><br />
            Email: <a href="mailto:tusharsalesindia@gmail.com" className="text-[#905A01] hover:underline">tusharsalesindia@gmail.com</a>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#1A3F22] text-lg">Quick Links</h4>
          <ul className="mt-3 text-sm text-[#58761B] space-y-2">
            <li><Link to="/services" className="hover:text-[#D99201] transition">Services</Link></li>
            <li><Link to="/our-centre" className="hover:text-[#D99201] transition">Our Centre</Link></li>
            <li><Link to="/contact" className="hover:text-[#D99201] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Trusted By */}
        <div>
          <h4 className="font-semibold text-[#1A3F22] text-lg">Trusted by</h4>
          <p className="mt-3 text-sm text-[#58761B]">
            British Council · BITS Pilani · CFA<br />Other institutional partners
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#fffdf8] border-t border-[#D99201]/20 py-4">
        <div className="container mx-auto text-center text-xs text-[#58761B]">
          © {new Date().getFullYear()} <span className="font-semibold text-[#1A3F22]">Apex</span>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
