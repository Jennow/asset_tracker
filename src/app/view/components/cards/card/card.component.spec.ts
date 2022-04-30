import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { TimeformatService } from 'src/app/services/timeformat.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/collections/user.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let timeFormatService: TimeformatService;
  let timeformatServiceStub: Partial<TimeformatService>;




  const user: User = {
    username: 'testuser',
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
    timeFormatService = TestBed.inject(TimeformatService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
