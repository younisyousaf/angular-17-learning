import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LifecycleEventsComponent } from './components/lifecycle-events/lifecycle-events.component';
import { NoEncapsulationComponent } from './components/encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './components/encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ChildMetaComponent } from './components/child-meta/child-meta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    EmployeeListComponent,
    LifecycleEventsComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    ChildMetaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17-learning';
}
