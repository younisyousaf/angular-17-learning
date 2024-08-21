import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot-projection',
  standalone: true,
  template: `
    <h2>Multi-slot content projection</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `,
})
export class MultiSlotProjectionComponent {}
