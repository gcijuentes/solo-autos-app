import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCarsComponent } from './top-cars.component';

describe('TopCarsComponent', () => {
  let component: TopCarsComponent;
  let fixture: ComponentFixture<TopCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
