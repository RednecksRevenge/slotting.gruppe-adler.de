import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContentModule } from './content/content.module';
import { NavbarComponent } from './main/navbar.component';
import { FooterComponent } from './main/footer.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { ContentService } from './content/content.service';
import { StorageModule } from './storage/storage.module';
import { AnalyticsService } from './analytics.service';
import { WindowRef } from './window-ref';
import { BackgroundComponent } from './main/background.component';
import { NotFoundComponent } from './main/not-found.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from './translate-http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'events',
        loadChildren: './slotting/shared/shared.module#SharedModule'
      },
      {
        path: 'slotting',
        loadChildren: './slotting/slotting.module#SlottingModule'
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ContentModule,
    SimpleNotificationsModule.forRoot(),
    MaterialModule,
    NgProgressModule.forRoot(),
    StorageModule,
    NgProgressHttpModule
  ],
  providers: [
    ContentService,
    AnalyticsService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }