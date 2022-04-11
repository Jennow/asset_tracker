import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeformatService } from 'src/app/services/timeformat.service';

import { LinearchartComponent } from './linearchart.component';

describe('LinearChartComponent', () => {
  let component: LinearchartComponent;
  let fixture: ComponentFixture<LinearchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        // TimeformatService
      ],
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
