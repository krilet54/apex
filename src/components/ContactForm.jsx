import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  function update(e){
    setForm(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // simple client-side validation
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', message:'Please complete all fields.'})
      return
    }
    setStatus({type:'success', message:'Thank you! Preparing email...'})
    const subject = encodeURIComponent('Apex Site Enquiry from '+form.name)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    // open mailto fallback
    window.location.href = `mailto:tusharsalesindia@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Name</span>
          <input name="name" value={form.name} onChange={update} className="mt-1 border rounded px-3 py-2 focus-ring" required aria-required />
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input name="email" value={form.email} onChange={update} className="mt-1 border rounded px-3 py-2 focus-ring" type="email" required />
        </label>
      </div>
      <label className="flex flex-col mt-4">
        <span className="text-sm font-medium">Message</span>
        <textarea name="message" value={form.message} onChange={update} className="mt-1 border rounded px-3 py-2 h-28 focus-ring" required />
      </label>
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="btn-base btn-primary">Send Message</button>
        {status && <div className={`${status.type==='success'? 'text-green-600':'text-red-600'} text-sm`}>{status.message}</div>}
      </div>
    </form>
  )
}
