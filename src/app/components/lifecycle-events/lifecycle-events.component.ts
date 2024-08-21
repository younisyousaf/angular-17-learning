import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
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
    OnChanges,
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
  childMessage: string = 'Message from Child Component';
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
  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `Name changed from ${changes['name'].previousValue} to ${changes['name'].currentValue}`
    );
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
