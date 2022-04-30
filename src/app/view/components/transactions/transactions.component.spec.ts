import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionService } from 'src/app/services/collections/transaction.service';
import { UserService } from 'src/app/services/collections/user.service';
import { TimeformatService } from 'src/app/services/timeformat.service';
import { User } from 'src/app/model/User';
import { Transaction } from 'src/app/model/Transaction';

import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

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
      declarations: [ TransactionsComponent ],
      providers: [
        TransactionService,
        TimeformatService,
        { provide: UserService, useValue: mockUserService },
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
