import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-events',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-events.component.html',
  styleUrl: './lifecycle-events.component.css',
})
export class LifecycleEventsComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  constructorTime: string;
  ngOnInitTime: string = '';
  // ngDoCheckTime: string = '';
  // ngAfterViewInitTime: string = '';
  // ngAfterViewCheckedTime: string = '';
  // ngAfterContentInitTime: string = '';
  // ngAfterContentCheckedTime: string = '';
  // ngOnDestroyTime: string = '';

  constructor() {
    this.constructorTime = new Date().toLocaleString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
    });
  }

  ngOnInit(): void {
    this.ngOnInitTime = new Date().toLocaleString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
    });
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngOnDestroy(): void {}
}
