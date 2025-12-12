import React from 'react'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
