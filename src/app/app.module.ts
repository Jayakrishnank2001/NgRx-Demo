import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './state/counter/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { TopNavComponent } from './components/layouts/top-nav/top-nav.component';
import { ProductComponent } from './components/product/product.component';
import { productReducer } from './state/product/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:CounterReducer,products:productReducer})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
