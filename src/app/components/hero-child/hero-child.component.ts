import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  standalone: true,
  imports: [],
  templateUrl: './hero-child.component.html',
  styleUrl: './hero-child.component.css',
})
export class HeroChildComponent {
  // We Will use Input Decorator to receive the message from the Parent Component
  @Input() message: string = '';
  @Input() hero!: Hero;
  @Input('master') masterName = '';
  // We Will use output Decorator to send the message back towards the parent component
  @Output() messageEvent = new EventEmitter<string>();

  // We Will make a funtion so when the event will triggered this function will be called
  sendMessageToParent(){
    this.messageEvent.emit("This is the message from child component!")
  }
}
