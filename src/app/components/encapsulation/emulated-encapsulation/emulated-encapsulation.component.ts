import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <div class="border border-danger m-2 p-2">
      <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [NoEncapsulationComponent],
})
export class EmulatedEncapsulationComponent {}
