import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      description: 'Olá, me chamo Igor, sou um Desenvolvedor Full-Stack, e sou dedicado a transformar ideias em aplicações web inovadoras. Fique a vontade para explorar meus projetos, onde minha especialidade está em desenvolvimento <strong>Angular</strong> e <strong>Node.js</strong> para aplicações WEB.'
    }
  },
  {path: '**', redirectTo: ''},
];
