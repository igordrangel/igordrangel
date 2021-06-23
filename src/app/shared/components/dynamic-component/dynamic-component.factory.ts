import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { DynamicComponentComponent } from './dynamic-component.component';

@Component({
	selector: 'idr-dynamic-component',
	template: `
		<ng-template dynamicComponent></ng-template>`
})
export class DynamicComponentFactory implements OnInit, OnChanges {
	@Input() dynamicComponent: DynamicComponent;
	@ViewChild(DynamicComponentDirective, {static: true}) koalaDynamicComponentDirective: DynamicComponentDirective;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges) {
	  if (changes.dynamicComponent) {
	    this.loadComponent();
    }
  }

  ngOnInit() {
		this.loadComponent();
	}

	loadComponent() {
		const dynamicComponent = this.dynamicComponent;

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent.component);

		const viewContainerRef = this.koalaDynamicComponentDirective.viewContainerRef;
		viewContainerRef.clear();

		const componentRef = viewContainerRef.createComponent<DynamicComponentComponent>(componentFactory);
		componentRef.instance.data = dynamicComponent.data;
	}

}
