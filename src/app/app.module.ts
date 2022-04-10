import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/cards/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { ChartComponent } from './components/chart/chart.component';
import { AssetsummariesComponent } from './components/assetsummaries/assetsummaries.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SidebarlinkComponent } from './components/sidebar/sidebarlink/sidebarlink.component';
import { NotificationComponent } from './components/navbar/notification/notification.component';
import { UserService } from './services/collections/user.service';
import { LinearchartComponent } from './components/chart/linearchart/linearchart.component';
import { PiechartComponent } from './components/chart/piechart/piechart.component';
import { ApiService } from './services/api.service';
import { AbstractCollectionService } from './services/collections/abstractcollection.service';
import { CandlestickchartComponent } from './components/chart/candlestickchart/candlestickchart.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';

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
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    CardsComponent,
    TeaserComponent,
    ChartComponent,
    AssetsummariesComponent,
    OverviewComponent,
    TransactionsComponent,
    SidebarlinkComponent,
    NotificationComponent,
    LinearchartComponent,
    PiechartComponent,
    CandlestickchartComponent,
    DashboardComponent,
    AddTransactionComponent
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
    AbstractCollectionService,
    UserService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
