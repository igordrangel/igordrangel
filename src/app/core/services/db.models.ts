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
