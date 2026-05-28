import { Project } from '@/core/services/db.models';
import { Button } from '@/shared/components/button';
import { LoadingImage } from '@/shared/components/loading-image';
import { SectionHeader } from '@/shared/components/section-header';
import { Reveal } from '@/shared/directives/reveal';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-saas-featured',
  templateUrl: './saas-featured.html',
  imports: [LoadingImage, Button, SectionHeader, Reveal],
})
export class SaasFeatured {
  readonly saas = input.required<Project>();
}
