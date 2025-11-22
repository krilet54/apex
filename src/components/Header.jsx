import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
    {to: '/our-centre', label: 'Our Centre'},
    {to: '/services', label: 'Services'},
    {to: '/contact', label: 'Contact'}
  ]

  return (
    <header className={`sticky top-0 z-40 transition backdrop-blur-sm ${scrolled? 'bg-white/70 shadow-sm': 'bg-white/60'}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">A</div>
            <span className="font-semibold text-lg">Apex</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item=> (
            <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm font-medium ${isActive? 'text-primary':'text-slate-700'}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-sm">Get Quote</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md focus-ring" onClick={()=>setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 transform ${open? 'translate-x-0':'translate-x-full'} transition-transform`} aria-hidden={!open}>
        <div className="absolute inset-0 bg-black/30" onClick={()=>setOpen(false)}></div>
        <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">A</div><span className="font-semibold">Apex</span></div>
            <button aria-label="Close menu" className="p-2" onClick={()=>setOpen(false)}><X size={20}/></button>
          </div>
          <nav className="flex flex-col gap-3">
            {nav.map(item=> (
              <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({isActive})=>`py-2 ${isActive? 'text-primary font-semibold':'text-slate-700'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-6">
            <a href="tel:9560553909" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl"><Phone size={16}/> 9560553909</a>
          </div>
        </aside>
      </div>
    </header>
  )
}
