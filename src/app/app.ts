import { Component } from '@angular/core';
import { BodyContainer } from './core/components/body-container';
import { Footer } from './core/components/footer';
import { Navbar } from './core/components/nav-bar';
import { RouterContentContainer } from './core/components/router-content-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [BodyContainer, Navbar, RouterContentContainer, Footer],
})
export class App {}
