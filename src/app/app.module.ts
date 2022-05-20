import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { SidebarComponent } from './view/components/sidebar/sidebar.component';
import { CardComponent } from './view/components/cards/card/card.component';
import { CardsComponent } from './view/components/cards/cards.component';
import { TeaserComponent } from './view/components/teaser/teaser.component';
import { ChartComponent } from './view/components/chart/chart.component';
import { OverviewComponent } from './view/components/overview/overview.component';
import { TransactionsComponent } from './view/components/transactions/transactions.component';
import { SidebarlinkComponent } from './view/components/sidebar/sidebarlink/sidebarlink.component';
import { NotificationComponent } from './view/components/navbar/notification/notification.component';
import { UserService } from './services/collections/user.service';
import { LinearchartComponent } from './view/components/chart/linearchart/linearchart.component';
import { PiechartComponent } from './view/components/chart/piechart/piechart.component';
import { CollectionService } from './services/collections/collection.service';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { AddTransactionComponent } from './view/pages/add-transaction/add-transaction.component';
import { LoginComponent } from './view/pages/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add_transaction',
    component: AddTransactionComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    CardsComponent,
    TeaserComponent,
    ChartComponent,
    OverviewComponent,
    TransactionsComponent,
    SidebarlinkComponent,
    NotificationComponent,
    LinearchartComponent,
    PiechartComponent,
    DashboardComponent,
    AddTransactionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    CollectionService,
    UserService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
