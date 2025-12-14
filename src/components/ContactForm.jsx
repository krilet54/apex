import React, { useState } from 'react'

export default function ContactForm({ className = '' }){
  const [status, setStatus] = useState(null)

  return (
    <form action="https://formsubmit.co/apexexamcentre@gmail.com" method="POST" className={`space-y-5 ${className}`}> 
      <input type="hidden" name="_subject" value="Website enquiry from APEX" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col text-sm font-semibold text-[#1A3F22]">
          <span>Name</span>
          <input
            name="name"
            className="mt-2 w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 text-sm font-normal text-[#1A3F22] focus:border-[#D99201] focus:outline-none focus:ring-2 focus:ring-[#D99201]/20"
            required
            aria-required
          />
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#1A3F22]">
          <span>Email</span>
          <input
            name="email"
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
          className="mt-2 w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 text-sm font-normal text-[#1A3F22] h-32 focus:border-[#D99201] focus:outline-none focus:ring-2 focus:ring-[#D99201]/20"
          required
        />
      </label>
      <div className="pt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-base btn-primary">Send Message</button>
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
