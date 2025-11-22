import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({service}){
  return (
    <motion.article whileHover={{y:-6}} className="border rounded-xl p-6 bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.short}</p>
      <div className="mt-4">
        <Link to={`/services/${service.slug}`} className="text-primary font-medium">Read more →</Link>
      </div>
    </motion.article>
  )
}
