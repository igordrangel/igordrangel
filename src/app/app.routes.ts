import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home.page';
import { ProjectsPage } from './features/projects/pages/projects.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projetos', component: ProjectsPage },
];
