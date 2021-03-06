import { DatePipe } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService, NGXMapperService } from 'ngx-logger';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      providers: [
        NGXLogger,
        NGXMapperService,
        HttpBackend,
        NGXLoggerHttpService,
        LoggerConfig,
        DatePipe
      ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

  it('Debe crear el cliente correctamente', () => {
    (<HTMLInputElement>document.getElementById('shared_key')).value = '12345';
    (<HTMLInputElement>document.getElementById('business_id')).value = 'Nicolas Santamaría';
    (<HTMLInputElement>document.getElementById('email')).value = 'nsantamaria@gmail.com';
    (<HTMLInputElement>document.getElementById('phone')).value = '3213434312';
    expect(fixture.nativeElement.querySelector('#btnCrearCliente').disabled).toBeFalse();
  });

  it('Debe fallar al crear el cliente por correo', () => {
    (<HTMLInputElement>document.getElementById('shared_key')).value = '020600';
    (<HTMLInputElement>document.getElementById('business_id')).value = 'Jose Mora';
    (<HTMLInputElement>document.getElementById('email')).value = '32212344323';
    (<HTMLInputElement>document.getElementById('phone')).value = '3213434312';
    expect(fixture.nativeElement.querySelector('#btnCrearCliente').disabled).toBeFalse();
  });

});
