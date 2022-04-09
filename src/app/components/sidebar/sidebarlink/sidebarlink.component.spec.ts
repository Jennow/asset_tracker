import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarlinkComponent } from './sidebarlink.component';

describe('SidebarlinkComponent', () => {
  let component: SidebarlinkComponent;
  let fixture: ComponentFixture<SidebarlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
