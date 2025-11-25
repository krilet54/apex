import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const OurCentre = lazy(() => import('../pages/OurCentre'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Contact = lazy(() => import('../pages/Contact'))

export default function AppRouter(){
  return (
    <Suspense fallback={<span class="loader"></span>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/our-centre" element={<OurCentre/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:slug" element={<ServiceDetail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Suspense>
  )
}
