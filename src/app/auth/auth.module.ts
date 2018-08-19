import {NgModule} from '@angular/core';
import {OpenidAuthUrlService} from './openid-auth-url.service';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import {LoginService} from './login.service';
import {ApiModule} from '../../generated/slotlist-backend';
import {CommonModule} from '@angular/common';

@NgModule({
  providers: [
    OpenidAuthUrlService,
    LoginService,
  ],
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AuthComponent,
      }
    ])
  ]
})
export class AuthModule {}
