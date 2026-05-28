import { Routes } from '@angular/router';
import { CareerPage } from './features/career/pages/career.page';
import { HomePage } from './features/home/pages/home.page';
import { ProjectsPage } from './features/projects/pages/projects.page';
import { SkillsPage } from './features/skills/pages/skills.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projetos', component: ProjectsPage },
  { path: 'carreira', component: CareerPage },
  { path: 'skills', component: SkillsPage },
];
