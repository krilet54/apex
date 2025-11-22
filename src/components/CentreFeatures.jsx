import React from 'react'
import { Cpu, Server, Power, Lock } from 'lucide-react'

const features = [
  { icon: Cpu, label: 'Workstations', value: '172' },
  { icon: Server, label: 'Labs', value: '7' },
  { icon: Power, label: 'UPS & Generator', value: 'Yes' },
  { icon: Lock, label: 'CCTV & Access', value: 'Enabled' }
]

export default function CentreFeatures() {
  return (
    <section className="container mx-auto py-20">
      <div className="bg-white rounded-2xl p-10 shadow-md border border-[#58761B]/10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#1A3F22]">
              Our Centre Snapshot
            </h3>
            <p className="mt-1 text-[#58761B]">
              Secure infrastructure and purpose-built facilities for high-stakes
              assessments.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-sm text-[#58761B]">
            <div className="px-4 py-2 bg-gradient-to-r from-[#D99201]/20 to-[#905A01]/20 text-[#1A3F22] rounded-md border border-[#D99201]/30 shadow-sm">
              Trusted by institutional clients
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <div
                key={idx}
                className="rounded-xl bg-gradient-to-b from-white to-[#fef9f5] border border-[#D99201]/20 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-[#D99201]/15 text-[#905A01]">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#1A3F22]">{f.value}</div>
                  <div className="text-sm text-[#58761B]">{f.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
