import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContructorItemComponent } from './contructor-item.component';

describe('ContructorItemComponent', () => {
  let component: ContructorItemComponent;
  let fixture: ComponentFixture<ContructorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContructorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContructorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
