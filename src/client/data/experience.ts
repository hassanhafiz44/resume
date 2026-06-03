export interface Job {
  title: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    title: 'Web Developer',
    company: 'Avas Flowers',
    location: 'USA',
    dates: 'Oct 2023 — Apr 2026',
    bullets: [
      'Modernized and maintained PHP web applications, focusing on PHP 7 and 8, ensuring compatibility and performance improvements.',
      'Upgraded legacy projects to the latest versions of Laravel and CodeIgniter, enhancing code quality and maintainability.',
      'Resolved client tickets promptly, leading to increased user satisfaction and a consistent 5-star Upwork rating.',
      'Employed Git for version control, ensuring clean code practices and efficient project management.',
    ],
  },
  {
    title: 'Full Stack CodeIgniter and Laravel Developer',
    company: 'Invocore Inc',
    location: 'Malaysia',
    dates: 'Jan 2020 — Oct 2023',
    bullets: [
      'Engineered a 100-point Merit System for employee performance tracking, utilizing object-oriented programming principles to ensure objective and transparent evaluations.',
      'Developed scalable features for Invocore\'s core time-calculation product and various Laravel projects, adhering to PSR-12 standards for clean code.',
      'Implemented dependency injection in Laravel applications, enhancing modularity and maintainability.',
      'Automated ETL processes for downloading, normalizing, and storing sales data from Shopee and Lazada, improving data processing efficiency.',
      'Designed and maintained MySQL database schemas for applications like Kaolin Inventory and ELR illuminator calculator, employing Eloquent ORM and query builders to prevent SQL injection vulnerabilities.',
    ],
  },
  {
    title: 'Xamarin Forms Mobile App Developer',
    company: 'UV Soft Solutions',
    location: 'Lahore',
    dates: 'May 2018 — Aug 2018',
    bullets: [
      'Developed user-friendly mobile interfaces using JavaScript, enhancing user experience for the \'GB Paper Receipt\' app.',
      'Integrated RESTful APIs to improve app functionality and conducted thorough testing to ensure reliability.',
    ],
  },
]
