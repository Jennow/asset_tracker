import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { CryptohistoryService } from 'src/app/services/histories/cryptohistory.service';

import { AssetsummariesComponent } from './assetsummaries.component';

describe('AssetsummariesComponent', () => {
  let component: AssetsummariesComponent;
  let fixture: ComponentFixture<AssetsummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ApiService
      ],
      imports: [
        HttpClientTestingModule,
        
      ],
      declarations: [ AssetsummariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
