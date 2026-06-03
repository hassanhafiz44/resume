export interface Project {
  name: string
  description: string
  url: string
  tags: string[]
  company: string
}

export const projects: Project[] = [
  {
    name: 'invoTIME',
    company: 'Invocore Inc · Malaysia',
    description:
      'Time tracking and payroll management platform used by Malaysian companies. Built core time-calculation features and scalable employee management modules.',
    url: 'https://invocore.com.my/app/invotime',
    tags: ['CodeIgniter', 'PHP', 'MySQL', 'REST API'],
  },
  {
    name: 'Kaolin Inventory Management',
    company: 'Invocore Inc · Malaysia',
    description:
      'Internal inventory management system for Kaolin. Designed and maintained MySQL schemas and built Eloquent-powered CRUD with SQL-injection protection.',
    url: 'https://ims.kaolin.com.my/',
    tags: ['Laravel', 'PHP', 'MySQL', 'Eloquent'],
  },
  {
    name: 'ELR Illuminator Calculator',
    company: 'Invocore Inc · Malaysia',
    description:
      'Web application for ELR Group — a premium architectural LED lighting manufacturer — enabling customers to configure and calculate lighting solutions.',
    url: 'https://www.elr-group.com/',
    tags: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    name: 'US Coast Guard Questions',
    company: 'Freelance',
    description:
      'Study platform for merchant mariners preparing for US Coast Guard licensing exams. Features practice exams, searchable question banks, and community forums.',
    url: 'https://www.uscgq.com/',
    tags: ['PHP', 'Vanilla PHP', 'MySQL'],
  },
  {
    name: 'Avas Flowers',
    company: 'Avas Flowers · USA',
    description:
      'Large-scale online flower delivery platform. Modernized and maintained PHP 7/8 applications, upgraded legacy Laravel and CodeIgniter codebases.',
    url: 'https://avasflowers.com',
    tags: ['PHP 7/8', 'Laravel', 'CodeIgniter', 'Git'],
  },
]
