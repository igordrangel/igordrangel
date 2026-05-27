import { DbService } from '@/core/services/db.service';
import { Button } from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.html',
  imports: [Card, Button],
})
export class MainProjects {
  readonly db = inject(DbService);
}
