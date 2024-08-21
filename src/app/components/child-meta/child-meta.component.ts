import { Component } from '@angular/core';

@Component({
  selector: 'app-child-meta',
  standalone: true,
  imports: [],
  templateUrl: './child-meta.component.html',
  styleUrl: './child-meta.component.css',
  // We will receive the parent data here with input metadata
  inputs: ['PData'],
})
export class ChildMetaComponent {
  PData: any;
}
