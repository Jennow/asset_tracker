import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearchartComponent } from './linearchart.component';

describe('LinearChartComponent', () => {
  let component: LinearchartComponent;
  let fixture: ComponentFixture<LinearchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
