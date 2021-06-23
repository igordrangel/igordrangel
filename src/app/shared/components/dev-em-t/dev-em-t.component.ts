import { Component, Input } from "@angular/core";

export interface DevEmTStacksInterface {
  title: string;
  description: string;
}

@Component({
  selector: 'idr-dev-em-t',
  templateUrl: 'dev-em-t.component.html',
  styleUrls: ['dev-em-t.component.css']
})
export class DevEmTComponent {
  @Input('stacks') public stacks: DevEmTStacksInterface[] = [];
  public currentDescription: string;
}
