export interface Project {
  thumbnail: string;
  label: string;
  description: string;
  docUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
}

export interface SocialMedia {
  label: string;
  url: string;
}

export interface LabeledDetail {
  label: string;
  details?: string;
}

export type Technology = LabeledDetail;

export type SkillAccent = 'angular' | 'node' | 'typescript' | 'nestjs';

export interface Skill extends LabeledDetail {
  description?: string;
  image?: string;
  icon?: string;
  accent?: SkillAccent;
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  label: string;
  description?: string;
  skills: LabeledDetail[];
}

export interface Career {
  label: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  company?: string;
  location?: string;
  url?: string;
  technologies?: Technology[];
  responsibilities?: string[];
  challenges?: string[];
  learnings?: string[];
}
