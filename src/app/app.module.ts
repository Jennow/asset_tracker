import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/cards/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewheaderComponent } from './components/overview/overviewheader/overviewheader.component';
import { OverviewcontentComponent } from './components/overview/overviewcontent/overviewcontent.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SidebarlinkComponent } from './components/sidebar/sidebarlink/sidebarlink.component';
import { NotificationComponent } from './components/navbar/notification/notification.component';
import { UserService } from './services/collections/user.service';
import { AreachartComponent } from './components/chart/areachart/areachart.component';
import { PiechartComponent } from './components/chart/piechart/piechart.component';

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
    ChartsComponent,
    OverviewComponent,
    OverviewheaderComponent,
    OverviewcontentComponent,
    TransactionsComponent,
    SidebarlinkComponent,
    NotificationComponent,
    AreachartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
