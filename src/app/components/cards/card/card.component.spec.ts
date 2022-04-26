import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { ApiService } from 'src/app/services/api.service';
import { TimeformatService } from 'src/app/services/timeformat.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/collections/user.service';

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

  const user: User = {
    login: 'testuser',
    password: 'testpwd',
    currency: {
      id: 1,
      identifier: 'usd',
      short: '$'
    },
  };

  const mockUserService: UserService = {
    getUser() {return user}
  } as UserService;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers: [ 
        ApiService,
        TimeformatService,
        { provide: UserService, useValue: mockUserService },
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
