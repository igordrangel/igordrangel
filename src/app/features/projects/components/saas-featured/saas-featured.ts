import { NgOptimizedImage } from '@angular/common';
import { Project } from '@/core/services/db.models';
import { Button } from '@/shared/components/button';
import { Skeleton } from '@/shared/components/skeleton';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-saas-featured',
  templateUrl: './saas-featured.html',
  imports: [NgOptimizedImage, Skeleton, Button],
})
export class SaasFeatured {
  readonly saas = input.required<Project>();
  readonly thumbnailIsLoading = signal(true);
}
