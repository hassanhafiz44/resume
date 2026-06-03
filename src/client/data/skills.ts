export interface Skill {
  name: string
  level: 'Experienced' | 'Skillful'
}

export const skills: Skill[] = [
  { name: 'PHP 7 and 8',                level: 'Experienced' },
  { name: 'Laravel',                    level: 'Experienced' },
  { name: 'CodeIgniter',                level: 'Experienced' },
  { name: 'Object-Oriented Programming', level: 'Skillful' },
  { name: 'PSR Standards',              level: 'Skillful' },
  { name: 'Dependency Injection',       level: 'Skillful' },
  { name: 'Composer',                   level: 'Skillful' },
  { name: 'Git',                        level: 'Skillful' },
  { name: 'MySQL',                      level: 'Skillful' },
  { name: 'JavaScript',                 level: 'Skillful' },
  { name: 'RESTful APIs',               level: 'Skillful' },
  { name: 'Clean Code',                 level: 'Experienced' },
]
