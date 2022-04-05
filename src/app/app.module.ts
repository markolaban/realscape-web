import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { ItemViewComponent } from './item-view/item-view.component';
import { RnAppViewComponent } from './rn-app-view/rn-app-view.component';
import { RnItemViewComponent } from './rn-item-view/rn-item-view.component';
import { RnViewsViewComponent } from './rn-views-view/rn-views-view.component';
import { RnQueryViewComponent } from './rn-query-view/rn-query-view.component';
import { RnLoginViewComponent } from './rn-login-view/rn-login-view.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { RnListViewComponent } from './rn-list-view/rn-list-view.component';
import { RnCalendarViewComponent } from './rn-calendar-view/rn-calendar-view.component';
import { RnViewComponent } from './rn-view/rn-view.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemViewComponent,
    RnAppViewComponent,
    RnItemViewComponent,
    RnViewsViewComponent,
    RnQueryViewComponent,
    RnLoginViewComponent,
    CallbackComponent,
    HomeViewComponent,
    RnListViewComponent,
    RnCalendarViewComponent,
    RnViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
