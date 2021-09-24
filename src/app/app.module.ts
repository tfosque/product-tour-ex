import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MenuComponent } from './menu/menu.component';
import { ProductTourContainerComponent } from './components/product-tour/product-tour-container/product-tour-container.component';
import { ProductTourStepperComponent } from './components/product-tour/product-tour-stepper/product-tour-stepper.component';
import { HomeComponent } from './home/home.component';
import { BtnComponent } from './components/btn/btn.component';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductTourContainerComponent,
    ProductTourStepperComponent,
    HomeComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
