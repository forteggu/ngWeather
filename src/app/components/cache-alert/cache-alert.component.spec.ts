import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheAlertComponent } from './cache-alert.component';

describe('CacheAlertComponent', () => {
  let component: CacheAlertComponent;
  let fixture: ComponentFixture<CacheAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
