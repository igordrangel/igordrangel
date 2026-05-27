import { Component } from '@angular/core';
import { Introduction } from '../components/introduction';
import { MainProjects } from '../components/projects/main-projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [Introduction, MainProjects],
})
export class HomePage {}
