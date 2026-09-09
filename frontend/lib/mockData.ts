import { TeamRegistration, TrackItem } from './types';

export const INITIAL_REGISTRATIONS: TeamRegistration[] = [
  {
    regId: 'HZ26-0042',
    teamName: 'Neural Ninjas',
    domain: 'AI FOR THE FUTURE',
    idea: 'Multilingual Voice Agent for Rural Citizen Welfare schemes.',
    leaderName: 'Deekshith Reddy',
    leaderUsn: 'U18VT23S0042',
    leaderYear: '3rd Year BCA',
    leaderSection: 'Section A',
    leaderPhone: '9876543210',
    leaderEmail: 'deekshith.reddy@gmail.com',
    membersCount: 4,
    members: [
      { name: 'Kiran Kumar', usn: 'U18VT23S0045', year: '3rd Year BCA' },
      { name: 'Sneha R', usn: 'U18VT23S0051', year: '3rd Year BCA' },
      { name: 'Prajwal S', usn: 'U18VT23S0060', year: '2nd Year BCA' }
    ],
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  },
  {
    regId: 'HZ26-0043',
    teamName: 'CampusSync',
    domain: 'NEXT-GEN EDTECH & CAMPUS',
    idea: 'Geofenced Bluetooth Smart Attendance & Library Gate Pass system.',
    leaderName: 'Manoj Gowda',
    leaderUsn: 'U18VT24S0012',
    leaderYear: '2nd Year BCA',
    leaderSection: 'Section B',
    leaderPhone: '9845123456',
    leaderEmail: 'manoj.gowda@gmail.com',
    membersCount: 3,
    members: [
      { name: 'Varun K', usn: 'U18VT24S0015', year: '2nd Year BCA' },
      { name: 'Ananya M', usn: 'U18VT24S0020', year: '2nd Year BCA' }
    ],
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  },
  {
    regId: 'HZ26-0044',
    teamName: 'AgroSense',
    domain: 'AGRITECH & RURAL INNOVATION',
    idea: 'Low-cost soil nitrogen detector & crop disease image scanner.',
    leaderName: 'Ravi Teja',
    leaderUsn: 'U18VT25S0008',
    leaderYear: '1st Year BCA',
    leaderSection: 'Section A',
    leaderPhone: '9731234567',
    leaderEmail: 'ravi.teja@gmail.com',
    membersCount: 3,
    members: [
      { name: 'Harsha N', usn: 'U18VT25S0011', year: '1st Year BCA' },
      { name: 'Sanjay B', usn: 'U18VT25S0014', year: '1st Year BCA' }
    ],
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  }
];

export const TRACKS: TrackItem[] = [
  {
    id: 'ai',
    num: '01',
    title: 'AI FOR THE FUTURE',
    emoji: '🤖',
    description: 'Explore how Artificial Intelligence can be used to solve real-world problems, automate tasks, make smarter decisions, and create innovative solutions for the future.',
    bullets: ['Intelligent Automation', 'Predictive AI Models', 'Smart Decision Systems'],
    accentColor: '#00F0FF',
    gradient: 'from-[#00F0FF]/15 to-transparent'
  },
  {
    id: 'social',
    num: '02',
    title: 'SOCIAL IMPACT',
    emoji: '🤝',
    description: 'Build innovative solutions that use technology to address real social challenges, improve accessibility, support communities, and create a positive impact on everyday lives.',
    bullets: ['Accessibility Tech', 'Community Support', 'Civic Empowerment'],
    accentColor: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/15 to-transparent'
  },
  {
    id: 'campus',
    num: '03',
    title: 'SMART CAMPUS',
    emoji: '🎓',
    description: 'Create smart solutions that improve student life, campus services, learning, communication, safety, and resource management through technology.',
    bullets: ['Campus Services & ERP', 'Smart Attendance & QR', 'Student Portals & Safety'],
    accentColor: '#38BDF8',
    gradient: 'from-[#38BDF8]/15 to-transparent'
  },
  {
    id: 'agri',
    num: '04',
    title: 'AGRICULTURE',
    emoji: '🌾',
    description: 'Build technology-driven solutions that address real agricultural challenges, improve farming practices, support farmers, and create more efficient and sustainable ways to grow and manage crops.',
    bullets: ['Crop Disease Detection', 'Precision Soil IoT', 'Farmer Advisory Tech'],
    accentColor: '#10B981',
    gradient: 'from-[#10B981]/15 to-transparent'
  },
  {
    id: 'healthcare',
    num: '05',
    title: 'HEALTHCARE',
    emoji: '🩺',
    description: 'Build innovative solutions that improve healthcare access, patient support, health awareness, monitoring, and everyday wellness through technology.',
    bullets: ['Telemedicine & Triage', 'Health Telemetry', 'Patient Wellness Apps'],
    accentColor: '#F43F5E',
    gradient: 'from-[#F43F5E]/15 to-transparent'
  },
  {
    id: 'open',
    num: '06',
    title: 'OPEN INNOVATION',
    emoji: '💡',
    description: 'Bring your own idea and build a creative, technology-driven solution to any meaningful problem, beyond the defined hackathon domains.',
    bullets: ['Zero Constraints', 'Disruptive Concept', 'High-Impact Execution'],
    accentColor: '#F59E0B',
    gradient: 'from-[#F59E0B]/15 to-transparent'
  }
];
