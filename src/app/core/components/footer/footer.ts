import { DbService } from '@/core/services/db.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly db = inject(DbService);
}
