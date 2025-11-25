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
    short: 'End-to-end online exam delivery with monitoring and proctoring.',
    slug: 'online-exam-centre',
    heroImage: s4,
    featureIcons: ['Monitor', 'Camera', 'ShieldCheck'],
    icon: 'Laptop',
    features: [
      'Secure browser environments',
      'Proctoring & monitoring',
      'Scalable candidate capacity'
    ],
    description: `Delivery of remote and onsite online examinations with secure proctoring, identity verification and robust infrastructure to handle peak concurrency.`
  },
  {
    id: 'manpower-outsourcing',
    title: 'Manpower Outsourcing (IT & Operations)',
    short: 'Trained IT and operations staff for exam delivery and facility management.',
    slug: 'manpower-outsourcing',
    heroImage: s3,
    featureIcons: ['Users', 'UserCheck', 'Clipboard'],
    icon: 'Users',
    features: ['Technical support engineers', 'Invigilation teams', 'Logistics coordinators'],
    description: `Provision of professional manpower for IT support, invigilation and operations to run exams smoothly and securely.`
  },
  {
    id: 'seminar-training-centres',
    title: 'Seminar & Training Centres',
    short: 'Purpose-built centres for corporate training and seminars.',
    slug: 'seminar-training-centres',
    heroImage: s5,
    featureIcons: ['BookOpen', 'Mic', 'Calendar'],
    icon: 'BookOpen',
    features: ['AV-enabled rooms', 'Modular seating', 'Catering support'],
    description: `Modern seminar and training spaces suitable for corporate programs, workshops and certification training with AV and support services.`
  },
  {
    id: 'exam-security-services',
    title: 'Exam Security Services',
    short: 'Comprehensive security and compliance for examinations.',
    slug: 'exam-security-services',
    heroImage: s1,
    featureIcons: ['ShieldCheck', 'Video', 'Key'],
    icon: 'ShieldCheck',
    features: ['CCTV', 'Access control', 'Secure document handling'],
    description: `Security services including CCTV monitoring, access control and secure handling of examination materials to maintain integrity.`
  },
  {
    id: 'housekeeping-services',
    title: 'Housekeeping Services',
    short: 'Daily cleaning, sanitisation and facility upkeep.',
    slug: 'housekeeping-services',
    heroImage: s2,
    featureIcons: ['Home', 'Droplet', 'Trash2'],
    icon: 'Home',
    features: ['Regular cleaning schedules', 'Sanitisation', 'Waste management'],
    description: `Professional housekeeping and facility management to ensure a clean, safe and compliant environment for candidates and staff.`
  }
]

export default services
