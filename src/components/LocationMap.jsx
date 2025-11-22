import React from 'react'

export default function LocationMap(){
  const src = "https://www.google.com/maps?q=Guru+Harkrishan+Public+School+Vasant+Vihar+New+Delhi&output=embed"
  return (
    <div className="mt-4 rounded overflow-hidden border">
      <iframe title="Apex location" src={src} className="w-full h-64" loading="lazy" />
    </div>
  )
}
