import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/collections/user.service';

import { LinearchartComponent } from './linearchart.component';

describe('LinearChartComponent', () => {
  let component: LinearchartComponent;
  let fixture: ComponentFixture<LinearchartComponent>;

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
        HttpClient,
        HttpHandler,
        { provide: UserService, useValue: mockUserService },
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
