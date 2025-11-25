import React, { useState } from 'react'

export default function ContactForm({ className = '' }){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  function update(e){
    setForm(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', message:'Please complete all fields.'})
      return
    }
    setStatus({type:'success', message:'Thank you! Preparing email...'})
    const subject = encodeURIComponent('Apex Site Enquiry from '+form.name)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:tusharsalesindia@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col text-sm font-semibold text-[#1A3F22]">
          <span>Name</span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            className="mt-2 w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 text-sm font-normal text-[#1A3F22] focus:border-[#D99201] focus:outline-none focus:ring-2 focus:ring-[#D99201]/20"
            required
            aria-required
          />
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#1A3F22]">
          <span>Email</span>
          <input
            name="email"
            value={form.email}
            onChange={update}
            className="mt-2 w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 text-sm font-normal text-[#1A3F22] focus:border-[#D99201] focus:outline-none focus:ring-2 focus:ring-[#D99201]/20"
            type="email"
            required
          />
        </label>
      </div>
      <label className="flex flex-col text-sm font-semibold text-[#1A3F22]">
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          className="mt-2 w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 text-sm font-normal text-[#1A3F22] h-32 focus:border-[#D99201] focus:outline-none focus:ring-2 focus:ring-[#D99201]/20"
          required
        />
      </label>
      <div className="pt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-base btn-primary">Send Message</button>
        {status && (
          <div className={`${status.type==='success'? 'text-[#1F7A4D]':'text-[#B02E2E]'} text-sm`}>
            {status.message}
          </div>
        )}
      </div>
    </form>
  )
}
