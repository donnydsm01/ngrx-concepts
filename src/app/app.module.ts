import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; 
//import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count : counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,  
      logOnly: environment.production,  
      autoPause: true, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 