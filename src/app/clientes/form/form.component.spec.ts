import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    component.mostrarFormulario(true);
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
