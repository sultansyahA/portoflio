export type ProjectCategory = 'Web App' | 'Sistem Admin' | 'E-Commerce'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  description: string
  image: string
  tech: string[]
  highlights: string[]
  demoUrl: string
  repoUrl: string
  year: string
}

export const projectCategories: (ProjectCategory | 'Semua')[] = [
  'Semua',
  'Web App',
  'Sistem Admin',
  'E-Commerce',
]

export const projects: Project[] = [
  {
    slug: 'bengkelku',
    title: 'Bengkelku',
    category: 'Web App',
    summary:
      'Sistem reservasi service mobil dengan manajemen antrian real-time melalui panel admin.',
    description:
      'Bengkelku memudahkan pelanggan memesan slot service mobil secara online sekaligus memberi admin kontrol penuh atas antrian bengkel. Sistem menampilkan status setiap kendaraan, estimasi waktu selesai, dan notifikasi otomatis ketika giliran tiba.',
    image: '/projects/bengkelku.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    highlights: [
      'Booking slot service dengan pemilihan tanggal & jenis layanan',
      'Dashboard admin untuk mengatur dan memantau antrian',
      'Notifikasi status kendaraan secara real-time',
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/sultansyahA/reservasi-bengkel',
    year: '2026',
  },
  {
    slug: 'furnion',
    title: 'FurniOn',
    category: 'E-Commerce',
    summary:
      'Platform penjualan furnitur kayu dengan manajemen stok terintegrasi lewat tampilan admin.',
    description:
      'FurniOn adalah toko online furnitur berbahan kayu yang dilengkapi katalog produk, keranjang belanja, serta panel admin untuk mengelola stok, harga, dan pesanan masuk. Setiap perubahan stok langsung tersinkron ke etalase pelanggan.',
    image: '/projects/furnion.png',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui'],
    highlights: [
      'Katalog produk dengan filter kategori dan pencarian',
      'Manajemen stok & pesanan real-time di sisi admin',
      'Checkout aman dengan integrasi pembayaran',
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/sultansyahA/furniture',
    year: '2024',
  },
  {
    slug: 'cuemaster',
    title: 'CueMaster',
    category: 'Sistem Admin',
    summary:
      'Sistem manajemen tempat billiard: pemesanan meja, timer sesi, dan laporan pendapatan.',
    description:
      'CueMaster membantu pemilik tempat billiard mengelola operasional harian — mulai dari status ketersediaan meja, timer sesi bermain otomatis, hingga rekap pendapatan. Semua data tersaji dalam dashboard yang ringkas dan mudah dipantau.',
    image: '/projects/cuemaster.png',
    tech: ['Laravel', 'PHP', 'MySQL'],
    highlights: [
      'Monitoring status dan timer tiap meja billiard',
      'Perhitungan tarif otomatis berdasarkan durasi',
      'Laporan pendapatan harian dan mingguan',
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/sultansyahA/billiard',
    year: '2026',
  },
]

export type SkillLevel = 'Aktif' | 'Berkembang' | 'Eksplorasi' | 'Fokus' | 'Praktik' | 'Produktif'

export type SkillGroup = {
  title: string
  level: SkillLevel
  icon: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    level: 'Aktif',
    icon: 'MonitorSmartphone',
    description:
      'Membangun antarmuka modern, interaktif, dan responsif dengan fokus pada pengalaman pengguna.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Framer Motion',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend Development',
    level: 'Berkembang',
    icon: 'Server',
    description:
      'Mengembangkan layanan backend dan integrasi API untuk mendukung aplikasi web yang efisien.',
    items: [
      'Laravel',
      'PHP Native',
      'Node.js',
      'Express.js',
      'REST API',
      'Authentication',
      'CRUD System',
      'JSON',
    ],
  },
  {
    title: 'Database & Cloud',
    level: 'Eksplorasi',
    icon: 'Database',
    description:
      'Mempelajari pengelolaan data, desain basis data, dan layanan cloud modern.',
    items: [
      'MySQL',
      'Supabase',
      'Firebase',
      'Database Design',
      'SQL Query',
      'Data Modeling',
      'Backup & Restore',
    ],
  },
  {
    title: 'Intelligent System & Automation',
    level: 'Fokus',
    icon: 'BrainCircuit',
    description:
      'Tertarik pada penerapan kecerdasan buatan dan sistem otomatis untuk menyelesaikan masalah nyata.',
    items: [
      'Machine Learning',
      'Python',
      'Automation',
      'Data Analysis',
      'AI Integration',
      'Prompt Engineering',
    ],
  },
  {
    title: 'IoT & Embedded',
    level: 'Praktik',
    icon: 'CircuitBoard',
    description:
      'Membangun prototipe perangkat terhubung dan sistem monitoring berbasis mikrokontroler.',
    items: [
      'Arduino',
      'ESP32',
      'Sensor',
      'MQTT',
      'Monitoring',
      'Embedded C',
    ],
  },
  {
    title: 'Tools & Workflow',
    level: 'Produktif',
    icon: 'Wrench',
    description:
      'Menggunakan tools modern untuk pengembangan, desain antarmuka, pengujian API, dan kolaborasi.',
    items: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'Postman',
      'Vercel',
      'Docker',
    ],
  },
]

export const socials = {
  github: 'https://github.com/sultansyahA',
  linkedin: 'https://www.linkedin.com/in/sultan-syah-afriyadi/',
  email: 'syahsultan565@gmail.com',
}
