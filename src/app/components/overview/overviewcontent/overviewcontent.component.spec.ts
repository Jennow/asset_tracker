import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewcontentComponent } from './overviewcontent.component';

describe('OverviewcontentComponent', () => {
  let component: OverviewcontentComponent;
  let fixture: ComponentFixture<OverviewcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
