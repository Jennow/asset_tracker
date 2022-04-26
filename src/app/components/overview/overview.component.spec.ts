import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OverviewComponent } from './overview.component';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/collections/user.service';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

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
        HttpClient,
        HttpHandler,
        ApiService,
        { provide: UserService, useValue: mockUserService },
      ],
      declarations: [ OverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
