import React, { useState } from 'react'

export default function ContactForm({ className = '' }){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)
  const [isSending, setIsSending] = useState(false)

  function update(e){
    setForm(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', message:'Please complete all fields.'})
      return
    }

    setIsSending(true)
    setStatus({type:'info', message:'Sending your message…'})

    try {
      const response = await fetch('https://formsubmit.co/ajax/tusharsalesindia@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Website enquiry from ${form.name}`
        })
      })

      if (!response.ok) throw new Error('Network error')

      setStatus({type:'success', message:'Message sent successfully.'})
      setForm({name:'', email:'', message:''})
    } catch (error) {
      setStatus({type:'error', message:'Unable to send right now. Please try again or email us directly.'})
    } finally {
      setIsSending(false)
    }
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
        <button type="submit" className="btn-base btn-primary" disabled={isSending}>
          {isSending ? 'Sending…' : 'Send Message'}
        </button>
        {status && (
          <div
            className={`text-sm ${
              status.type==='success'
                ? 'text-[#1F7A4D]'
                : status.type==='info'
                  ? 'text-[#D99201]'
                  : 'text-[#B02E2E]'
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </form>
  )
}
