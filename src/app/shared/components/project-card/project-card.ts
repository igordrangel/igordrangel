import { Project } from '@/core/services/db.models';
import { Button } from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  imports: [Card, Button],
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly compact = input(false, { transform: booleanAttribute });
}
