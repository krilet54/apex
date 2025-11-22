import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Contact</h4>
          <address className="not-italic mt-2 text-sm text-slate-700">
            Guru Harkrishan Public School<br/>
            Vasant Vihar, New Delhi - 110057<br/>
            Phone: <a href="tel:9560553909">9560553909</a><br/>
            Email: <a href="mailto:tusharsalesindia@gmail.com">tusharsalesindia@gmail.com</a>
          </address>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-slate-700 space-y-2">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/our-centre">Our Centre</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Trusted by</h4>
          <div className="mt-3 text-sm text-slate-700">British Council · BITS Pilani · CFA · Other institutional partners</div>
        </div>
      </div>
      <div className="bg-white py-4 border-t">
        <div className="container mx-auto text-center text-xs text-slate-500">© {new Date().getFullYear()} Apex. All rights reserved.</div>
      </div>
    </footer>
  )
}
