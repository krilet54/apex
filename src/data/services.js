// Editable services data used by Services page and ServiceDetail template
import s1 from '../assets/ESS.png'
import s2 from '../assets/HSS.png'
import s3 from '../assets/MP.png'
import s4 from '../assets/OEC.png'
import s5 from '../assets/ST.png'

const services = [
  {
    id: 'online-exam-centre',
    title: 'Online Exam Centre',
    short: 'End-to-end online examination delivery within secure, monitored environments.',
    slug: 'online-exam-centre',
    heroImage: s4,
    featureIcons: ['Monitor', 'Camera', 'ShieldCheck'],
    icon: 'Laptop',
    features: [
      'Secure examination and browser environments',
      'Controlled examination rooms',
      'Stable power and connectivity'
    ],
    description: `We deliver secure on-site and remote online examinations supported by controlled proctoring, robust identity verification, and resilient technical infrastructure.`
    ,
    longDescription: `We deliver secure on-site and remote online examinations supported by controlled proctoring, robust identity verification, and resilient technical infrastructure. Our environments are designed to support concurrent examination sessions at scale, with encrypted systems, continuous monitoring, and audit-ready records to protect assessment integrity and availability.`
  },
  {
    id: 'manpower-outsourcing',
    title: 'Manpower Outsourcing (IT & Operations)',
    short: 'Professionally trained IT and operations personnel supporting secure examination delivery and facility operations.',
    slug: 'manpower-outsourcing',
    heroImage: s3,
    featureIcons: ['Users', 'UserCheck', 'Clipboard'],
    icon: 'Users',
    features: ['On-site IT and operations support', 'Trained invigilation personnel', 'Session logistics and coordination teams'],
    description: `Professional IT, invigilation, and operations staffing supporting secure examination delivery.`
    ,
    longDescription: `We provide trained IT and examination operations personnel to support reliable, secure exam delivery. From on-site technical readiness to invigilation and session coordination, our teams operate within defined protocols to ensure consistency, efficiency, and controlled execution across examination programmes.`
  },
  {
    id: 'seminar-training-centres',
    title: 'Seminar & Training Centres',
    short: 'Structured spaces for corporate training, seminars and structured programmes.',
    slug: 'seminar-training-centres',
    heroImage: s5,
    featureIcons: ['BookOpen', 'Mic', 'Calendar'],
    icon: 'BookOpen',
    features: ['AV-enabled training rooms', 'Flexible seating configurations', 'On-site coordination and catering support'],
    description: `Professionally equipped training and seminar spaces supporting corporate workshops, certification sessions and training programmes.`
    ,
    longDescription: `Professionally managed seminar and training venues designed to support corporate programmes, workshops, and certification sessions. Our spaces are equipped with AV infrastructure, flexible layouts, and on-site coordination, allowing sessions to run smoothly while participants remain focused on learning outcomes.`
  },
  {
    id: 'exam-security-services',
    title: 'Exam Security Services',
    short: 'Security protocols aligned with examination compliance',
    slug: 'exam-security-services',
    heroImage: s1,
    featureIcons: ['ShieldCheck', 'Video', 'Key'],
    icon: 'ShieldCheck',
    features: ['On-site security personnel and supervision', 'Controlled access and monitored environments', 'Secure handling of examination materials'],
    description: `Dedicated security staff managing access control, on-site surveillance, and the secure handling of examination materials.`
    ,
    longDescription: `End-to-end examination security delivered through trained security personnel, controlled access procedures, and monitored environments. Our approach combines disciplined on-site supervision, secure handling of examination materials, and documented controls to protect integrity, prevent unauthorised access, and support audit and compliance requirements.`
  },
  {
    id: 'housekeeping-services',
    title: 'Housekeeping Services',
    short: 'Daily cleaning ensuring safe examination environments',
    slug: 'housekeeping-services',
    heroImage: s2,
    featureIcons: ['Home', 'Droplet', 'Trash2'],
    icon: 'Home',
    features: ['Scheduled cleaning aligned to examination sessions', 'Sanitization of examination and common areas', 'Controlled waste handling and disposal practices'],
    description: `Dedicated housekeeping staff maintaining clean, safe, and compliant examination environments.`
    ,
    longDescription: `Professionally managed housekeeping and facility support ensuring clean, hygienic, and compliant examination environments. Our teams operate to exam-day schedules, applying structured cleaning, sanitization, and waste-handling protocols to maintain comfort, safety, and operational readiness for candidates and staff.`
  }
]

export default services
