import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page.component';
import { ProjectsPageComponent } from './pages/projects/projects.page.component';
import { SkillsPageComponent } from './pages/skills/skills.page.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'projetos', component: ProjectsPageComponent},
  {path: 'skills', component: SkillsPageComponent}
];
