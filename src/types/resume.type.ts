export interface SocialLink {
  icon: string
  url: string
}

export interface Course {
  title: string
  date: string
  tutor?: string
  icon?: string
}

export interface Project {
  title: string
  period: string
  company: string
  description: string
}

export interface Skill {
  name: string
  icon: string
  level?: number
}

export interface SkillBranch {
  title: string
  skills: Skill[]
}

export interface Experience {
  position: string
  period: string
  company: string
  description: Array<{
    title?: string,
    content: string[]
  }>
}

export interface Resume {
  fullName: string
  caption: string
  description: string
  socialLinks: SocialLink[]
  experience: Experience[]
  languages: Array<{
    language: string
    level?: string
  }>
  courses: Course[]
  projects: Project[]
  skills: Record<string, SkillBranch>
}
