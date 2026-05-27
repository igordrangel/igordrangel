import { Button } from '@/shared/components/button';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  imports: [NgOptimizedImage, RouterLink, Button],
})
export class Introduction {}
