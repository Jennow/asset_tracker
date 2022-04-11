# AssetTracker

The asset tracker is a dashboard application for keeping track of personal digital assets. 
It was developed using Angular 13, ApexChart.js and Tailwind.css. 
The main focus of the project was increasing my Angular skills, so I tried to keep the backend part as generic as possible. Therefore I started developing the app with a json-server instead of a real API and database.
The market data is partially mocked and partially retreived by the API of coincap.io.
The design basis of the app is the template at https://therichpost.com/angular-12-responsive-admin-dashboard-template-using-tailwind-css/, which was refactored to use angular components, classes and functions.

## Features

### Overview
A component displaying the total value of all assets and a piechart.
Future ideas:
- Select, if piechart should display single assets, group asset types or group asset subtypes.
- Feed month comparison with real data 

### Cards
A grid of cards that show the favorite assets of the user. The asset has to have the "highlighted" property set to true to be displayed here.
Future ideas:
- Feed performance tags with real data 
- On Click -> Show performance chart of this particular asset -> detail view? 

### Asset type overviews
At the moment there are to asset types - stocks and crypto. For each there is a line chart that shows the accumulated performance of all the assets of the type over the last month in daily steps. Here the crypto chart uses real historical data via coincap.io and the stock chart uses a random value as a mock performance value.
Future ideas:
- Find a good market data API for stock history data and fill the chart with it
- Select timespan and ticksize. (year, month, week, day,...)

### Transaction table
Displays all transactions in a table
Future ideas:
- Pagination

### Teaser
Hardcoded message for the user
Future ideas:
- Display real username
- Display message depending on performance of the assets

### Add Transaction
Form for adding Transaction.
After adding transaction asset sum and asset history are too.

## Next Steps
- Build a real backend API and a Cronjob that regularly updates the asset performance and value depending on the market data
- Cache market data 
- Reduce the amount of API requests by caching and globally using data that is used in multiple components instead of doing an API Request every time
- Write tests
- Find a free, limitless stock market api
- Add views with new features: Ass Asset, Import Transactions, Export Transactions, Connect API
- Secure App by creating user accounts, letting them authenticate and connecting assets and transactions to the users
- Financial data is very sensitive, only use locally or work out a good security concept for protecting user data

## Angular Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
