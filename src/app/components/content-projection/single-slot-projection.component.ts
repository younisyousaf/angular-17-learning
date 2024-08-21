import { Component } from '@angular/core';

@Component({
  selector: 'app-single-slot-projection',
  standalone: true,
  template: `
    <div class="single-slot-projection">
      <h1>Single Slot Projection</h1>
      <ng-content></ng-content>
    </div>
  `,
})
export class SingleSlotProjectionComponent {}
