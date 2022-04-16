import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { ApiService } from 'src/app/services/api.service';
import { TimeformatService } from 'src/app/services/timeformat.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let apiService: ApiService;
  let timeFormatService: TimeformatService;
  let apiServiceStub: Partial<ApiService>;
  let timeformatServiceStub: Partial<TimeformatService>;


  apiServiceStub = {
    getApiUrl: () => 'woop'
  };

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers: [ 
        ApiService,
        TimeformatService
      ],
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ CardComponent ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    timeFormatService = TestBed.inject(TimeformatService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
