import { Component } from '@angular/core';
import { HeroChildComponent } from '../hero-child/hero-child.component';
import { HEROES } from '../hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroChildComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  heroes = HEROES;
  master = 'Master';
  childMessage: string = '';
  //Make the function that will listen to the event
  receiveMessage(message: string) {
    console.log('Message from the child is : ' + message);
    this.childMessage = message;
  }
}
