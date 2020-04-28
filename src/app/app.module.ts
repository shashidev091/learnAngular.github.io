import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Course } from './course.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesService } from './classes/classes.service';
import { PannelComponent } from './pannel/pannel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NetworkConComponent } from '././network-con/network-con.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Course,
    ClassesComponent,
    PannelComponent,
    ContactFormComponent,
    NetworkConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClassesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
