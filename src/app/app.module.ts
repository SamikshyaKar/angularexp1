import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablefromarrayComponent } from './observablefromarray/observablefromarray.component';
import { RandomobservablesComponent } from './randomobservables/randomobservables.component';
import { SubjectComponentComponent } from './subject-component/subject-component.component';
import { BehaviouralsubjectComponent } from './behaviouralsubject/behaviouralsubject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { Ngfordemotoprintnumbers2Component } from './ngfordemotoprintnumbers2/ngfordemotoprintnumbers2.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablefromarrayComponent,
    RandomobservablesComponent,
    SubjectComponentComponent,
    BehaviouralsubjectComponent,
    AsyncSubjectComponent,
    NgfordemoComponent,
    Ngfordemotoprintnumbers2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
