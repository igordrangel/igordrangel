import { Button } from '@/shared/components/button';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink, RouterLinkActive, Button],
})
export class Navbar {
  readonly links = [
    { label: 'Início', path: '/' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Carreira', path: '/carreira' },
    { label: 'Skills', path: '/skills' },
  ];
}
