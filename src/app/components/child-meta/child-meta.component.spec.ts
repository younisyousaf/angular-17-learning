import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMetaComponent } from './child-meta.component';

describe('ChildMetaComponent', () => {
  let component: ChildMetaComponent;
  let fixture: ComponentFixture<ChildMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildMetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
