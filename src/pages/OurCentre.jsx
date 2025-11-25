import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import LocationMap from '../components/LocationMap'
import IMG1 from '../assets/about_apex.png'
import IMG2 from '../assets/apex_gallery.png'
import IMG3 from '../assets/apex_gallery2.png'
import IMG4 from '../assets/apex_gallery3.png'
import centreReel from '../assets/images/Stop_Motion_Exam_Centre_Timelapse_Video.mp4'

const centreStats = [
  { value: '172', label: 'Secured workstations' },
  { value: '7 Labs', label: 'Parallel exam rooms' },
  { value: '175+', label: 'Waiting lounge capacity' },
  { value: '40 kVA', label: 'UPS power reserve' }
]

const focusHighlights = [
  'Dual-line high-speed internet with auto failover',
  'Biometric entry, CCTV coverage and discreet screening',
  'Dedicated command, staff and equipment rooms',
  'On-site technical + housekeeping teams for every slot'
]

const labBreakdown = [
  { title: 'Cluster A', detail: 'Four labs · 31 stations each · primary deployments' },
  { title: 'Cluster B', detail: 'Two labs · 21 stations each · staggered schedules' },
  { title: 'Special Lab', detail: 'One lab · 6 stations · accommodations & viva' }
]

const galleryImages = [
  { src: IMG1, alt: 'Exam control room', meta: 'Command + monitoring' },
  { src: IMG2, alt: 'Workstations', meta: 'Cluster A · 31 stations' },
  { src: IMG3, alt: 'Candidate lounge', meta: 'Waiting lounge · 175 pax' },
  { src: IMG4, alt: 'Operations view', meta: 'Staff room + prep' }
]

const evidenceStrip = [
  { src: IMG2, caption: 'Cluster A', detail: '31-seat lab with mirrored layout' },
  { src: IMG3, caption: 'Candidate Lounge', detail: 'Separate holding for next batch' },
  { src: IMG4, caption: 'Operations Wing', detail: 'Staff, biometrics, storage' }
]

const walkthroughSteps = [
  'Arrival + ID screening at school gate',
  'Orientation and locker assignment in lounge',
  'Biometric verification + escort to lab clusters',
  'Live monitoring and rapid resolution from command desk'
]

export default function OurCentre() {
  useEffect(() => {
    document.title = 'Apex — Our Centre'
  }, [])

  return (
    <>
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#0B1F13] via-[#122A18] to-[#1D3C24] text-white py-12 lg:py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h1 className="mt-4 text-4xl lg:text-[44px] font-semibold leading-tight">
              A purpose-built examination floor that mirrors defence-grade control.
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Located inside Guru Harkrishan Public School, Vasant Vihar, the facility keeps candidate handling, technology and security under a single command desk.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80">
              {centreStats.map((stat) => (
                <div key={stat.label} className="border-l border-white/30 pl-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-base btn-primary">
                Book The Centre
              </Link>
              <Link to="/about" className="btn-base btn-outline-light">
                Learn About Apex
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" aria-hidden />
            <img
              src={IMG1}
              alt="Apex exam lab"
              className="relative rounded-[28px] border border-white/20 shadow-2xl w-full object-cover h-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <PageContainer>
        <section className="mt-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Visual evidence</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1A3F22]">What candidates experience on-site</h2>
            </div>
            <Link to="/contact" className="text-sm font-medium text-[#1A3F22] underline decoration-dotted">
              Request full gallery access
            </Link>
          </div>
          <div className="mt-6 overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {evidenceStrip.map((item) => (
                <div key={item.caption} className="w-[280px] rounded-[28px] overflow-hidden border border-[#E5DCCB] bg-white shadow-sm">
                  <img src={item.src} alt={item.caption} className="h-48 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#58761B]">{item.caption}</p>
                    <p className="mt-2 text-[#1C4B26] text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-[#E8E0CF] bg-white p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Infrastructure snapshot</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#1A3F22]">Neutral interiors, disciplined controls.</h2>
              <p className="mt-4 text-[#4C6B37] leading-relaxed">
                Each lab is acoustically balanced, air-conditioned and mirrored for rapid candidate orientation. Waiting lounges hold entire next batches to keep circulation calm.
              </p>
            </div>
            <div className="space-y-4 text-sm text-[#1C4B26]">
              {focusHighlights.map((item) => (
                <div key={item} className="border-l-2 border-[#D99201] pl-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] items-stretch">
          <div className="rounded-[28px] bg-[#F8F4EA] p-8 border border-[#E5DCCB] h-full">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9F6B1F]">Lab configuration</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#1A3F22]">Parallel readiness for varied cohorts.</h3>
            <div className="mt-6 space-y-5 text-sm text-[#1C4B26]">
              {labBreakdown.map((lab) => (
                <div key={lab.title}>
                  <p className="font-semibold text-[#1A3F22]">{lab.title}</p>
                  <p>{lab.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E5DCCB] p-6 lg:p-8 bg-white h-full">
            <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Photo journal</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {galleryImages.map((image) => (
                <div key={image.alt} className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-48 w-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
                    <p className="text-sm font-medium text-white">{image.alt}</p>
                    <p className="text-xs text-white/80">{image.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative rounded-[28px] overflow-hidden border border-[#E5DCCB] bg-black">
            <video
              className="h-full w-full object-cover"
              src={centreReel}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm">
              Live capture · Examination floor perspective
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Walkthrough</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]">From entry to exit, rehearsed routines.</h3>
            <ul className="mt-5 space-y-4 text-sm text-[#1C4B26]">
              {walkthroughSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="text-[#D99201] font-semibold">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-[32px] border border-[#EADFC8] bg-[#FFFAF2] p-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#58761B]">Access + logistics</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#1A3F22]">Central, connected and discreet.</h3>
              <p className="mt-3 text-[#4C6B37]">
                Vasant Vihar and Munirka metro stations, RK Puram Sec-5 bus stop and secure school entry points keep movement predictable.
              </p>
              <p className="mt-3 text-sm text-[#1C4B26]">
                Guru Harkrishan Public School, Vasant Vihar, New Delhi – 110057
              </p>
            </div>
            <div className="rounded-[24px] overflow-hidden border border-[#E5DCCB]">
              <LocationMap />
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#102616] to-[#0B1F13] text-white p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Visit us now</p>
          <h3 className="mt-4 text-3xl font-semibold">Walk the floors, validate readiness in person.</h3>
          <p className="mt-3 text-white/80">Schedule an on-site walkthrough with our programme office and experience the examination flow end-to-end.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-base btn-primary">
              Visit Us Now
            </Link>
          </div>
        </section>
      </PageContainer>
    </>
  )
}
