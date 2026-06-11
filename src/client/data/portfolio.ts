export interface Project {
  name: string
  description: string
  url: string
  tags: string[]
  company: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'US Coast Guard Questions',
    company: 'Freelance',
    description:
      'Study platform for merchant mariners preparing for US Coast Guard licensing exams. Features practice exams, searchable question banks, and community forums.',
    url: 'https://www.uscgq.com/',
    tags: ['PHP', 'Vanilla PHP', 'MySQL'],
    image: '/portfolio/uscgq.webp',
  },
  {
    name: 'Avas Flowers',
    company: 'Avas Flowers · USA',
    description:
      'Large-scale online flower delivery platform. Modernized and maintained PHP 7/8 applications, upgraded legacy Laravel and CodeIgniter codebases.',
    url: 'https://avasflowers.com',
    tags: ['PHP 7/8', 'Laravel', 'CodeIgniter', 'Git'],
    image: '/portfolio/avasflowers.webp',
  },
  {
    name: 'Kaolin Inventory Management',
    company: 'Invocore Inc · Malaysia',
    description:
      'Internal inventory management system for Kaolin. Designed and maintained MySQL schemas and built Eloquent-powered CRUD with SQL-injection protection.',
    url: 'https://ims.kaolin.com.my/',
    tags: ['Laravel', 'PHP', 'MySQL', 'Eloquent'],
    image: '/portfolio/kaolin.webp',
  },
  {
    name: 'ELR Illuminator Calculator',
    company: 'Invocore Inc · Malaysia',
    description:
      'Web application for ELR Group — a premium architectural LED lighting manufacturer — enabling customers to configure and calculate lighting solutions.',
    url: 'https://www.elr-group.com/',
    tags: ['PHP', 'Laravel', 'MySQL'],
    image: '/portfolio/elr.webp',
  },
  {
    name: 'invoTIME',
    company: 'Invocore Inc · Malaysia',
    description:
      'Time tracking and payroll management platform used by Malaysian companies. Built core time-calculation features and scalable employee management modules.',
    url: 'https://invocore.com.my/app/invotime',
    tags: ['CodeIgniter', 'PHP', 'MySQL', 'REST API'],
    image: '/portfolio/invotime.webp',
  },
]
