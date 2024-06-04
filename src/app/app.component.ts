import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterOutlet, Routes } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet]
})
export class AppComponent {
  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    meta: Meta
  ) {
    router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof NavigationEnd),
      map(() => activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      meta.updateTag({
        name: 'description',
        content: event['title'] + event['description']
      })
    });
  }
}
