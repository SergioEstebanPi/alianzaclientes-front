import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './clientes/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggerConfig, LoggerModule, NGXLogger, NGXLoggerHttpService, NGXMapperService } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientesComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    LoggerModule.forRoot(environment.logging),
    HttpClientModule
  ],
  providers: [
    NGXLogger,
    NGXMapperService,
    NGXLoggerHttpService,
    LoggerConfig,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
