import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const OurCentre = lazy(() => import('../pages/OurCentre'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Contact = lazy(() => import('../pages/Contact'))

export default function AppRouter() {
  return (
<Suspense
  fallback={
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loader">
        <span>
          <span></span><span></span><span></span><span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  }
>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-centre" element={<OurCentre />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
