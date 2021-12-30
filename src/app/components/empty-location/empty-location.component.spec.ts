import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLocationComponent } from './empty-location.component';

describe('EmptyLocationComponent', () => {
  let component: EmptyLocationComponent;
  let fixture: ComponentFixture<EmptyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
