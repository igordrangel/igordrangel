import { SkillAccent } from '@/core/services/db.models';

export type SkillTheme = {
  border: string;
  borderHover: string;
  shadow: string;
  shadowHover: string;
  glowA: string;
  glowB: string;
  panel: string;
  ring: string;
  icon: string;
};

export const SKILL_THEMES: Record<SkillAccent, SkillTheme> = {
  angular: {
    border: 'border-red-500/35',
    borderHover: 'hover:border-red-400/55',
    shadow: 'shadow-lg shadow-red-500/15',
    shadowHover: 'hover:shadow-red-500/25',
    glowA: 'bg-red-500/25',
    glowB: 'bg-primary/20',
    panel: 'from-red-500/15 via-base-200/30 to-primary/10',
    ring: 'border-red-400/25',
    icon: 'text-red-400',
  },
  node: {
    border: 'border-emerald-500/35',
    borderHover: 'hover:border-emerald-400/55',
    shadow: 'shadow-lg shadow-emerald-500/15',
    shadowHover: 'hover:shadow-emerald-500/25',
    glowA: 'bg-emerald-500/25',
    glowB: 'bg-emerald-400/10',
    panel: 'from-emerald-500/15 via-base-200/30 to-emerald-400/5',
    ring: 'border-emerald-400/25',
    icon: 'text-emerald-400',
  },
  typescript: {
    border: 'border-sky-500/35',
    borderHover: 'hover:border-sky-400/55',
    shadow: 'shadow-lg shadow-sky-500/15',
    shadowHover: 'hover:shadow-sky-500/25',
    glowA: 'bg-sky-500/25',
    glowB: 'bg-sky-400/10',
    panel: 'from-sky-500/15 via-base-200/30 to-sky-400/5',
    ring: 'border-sky-400/25',
    icon: 'text-sky-400',
  },
  nestjs: {
    border: 'border-rose-500/35',
    borderHover: 'hover:border-rose-400/55',
    shadow: 'shadow-lg shadow-rose-500/15',
    shadowHover: 'hover:shadow-rose-500/25',
    glowA: 'bg-rose-500/25',
    glowB: 'bg-rose-400/10',
    panel: 'from-rose-500/15 via-base-200/30 to-rose-400/5',
    ring: 'border-rose-400/25',
    icon: 'text-rose-400',
  },
};
