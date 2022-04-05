import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { RnItemViewComponent } from './rn-item-view/rn-item-view.component';
import { RnQueryViewComponent } from './rn-query-view/rn-query-view.component';
import { RnLoginViewComponent } from './rn-login-view/rn-login-view.component';
import { RnListViewComponent } from './rn-list-view/rn-list-view.component';
import { RnCalendarViewComponent } from './rn-calendar-view/rn-calendar-view.component';
import { RnViewComponent } from './rn-view/rn-view.component';
import { RnMapViewComponent } from './rn-map-view/rn-map-view.component';
import { RnPanelViewComponent } from './rn-panel-view/rn-panel-view.component';
import { RnBoardViewComponent } from './rn-board-view/rn-board-view.component';
import { RnDocumentViewComponent } from './rn-document-view/rn-document-view.component';
import { RnImageViewComponent } from './rn-image-view/rn-image-view.component';
import { RnVideoViewComponent } from './rn-video-view/rn-video-view.component';
import { RnPageViewComponent } from './rn-page-view/rn-page-view.component';
import { RnDrawingViewComponent } from './rn-drawing-view/rn-drawing-view.component';
import { RnSceneViewComponent } from './rn-scene-view/rn-scene-view.component';
import { RnPropertiesViewComponent } from './rn-properties-view/rn-properties-view.component';
import { RnCardsViewComponent } from './rn-cards-view/rn-cards-view.component';
import { RnTreeViewComponent } from './rn-tree-view/rn-tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CallbackComponent,
    HomeComponent,
    RnItemViewComponent,
    RnQueryViewComponent,
    RnLoginViewComponent,
    RnListViewComponent,
    RnCalendarViewComponent,
    RnViewComponent,
    RnMapViewComponent,
    RnPanelViewComponent,
    RnBoardViewComponent,
    RnDocumentViewComponent,
    RnImageViewComponent,
    RnVideoViewComponent,
    RnPageViewComponent,
    RnDrawingViewComponent,
    RnSceneViewComponent,
    RnPropertiesViewComponent,
    RnCardsViewComponent,
    RnTreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
