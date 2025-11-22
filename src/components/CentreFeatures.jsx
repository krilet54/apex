import React from 'react'
import { Cpu, Server, Power, Lock } from 'lucide-react'

const features = [
  {icon: Cpu, label: 'Workstations', value: '172'},
  {icon: Server, label: 'Labs', value: '7'},
  {icon: Power, label: 'UPS & Generator', value: 'Yes'},
  {icon: Lock, label: 'CCTV & Access', value: 'Enabled'}
]

export default function CentreFeatures(){
  return (
    <section className="container mx-auto py-16">
      <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">Our Centre Snapshot</h3>
            <p className="mt-1 text-slate-600">Secure infrastructure and purpose-built facilities for high-stakes assessments.</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-slate-700">
            <div className="px-3 py-2 bg-white rounded-md shadow">Trusted by institutional clients</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, idx)=>{
            const Icon = f.icon
            return (
              <div key={idx} className="bg-white rounded-xl p-4 flex items-center gap-4 border">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{f.value}</div>
                  <div className="text-sm text-slate-600">{f.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
