import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComponent } from './clientes.component';

describe('ClientesComponent', () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

  it('Debe encontrar el cliente', () => {
    (<HTMLInputElement>document.getElementById('campoBusqueda')).value = 'jgutierrez';
    document.getElementById('btnBuscar').click();
    expect(component.clientes.filter((cliente) => cliente.shared_key == 'jgutierrez').length)
      .toBeGreaterThan(0);
  });

  it('No debe encontrar al buscar cliente', () => {
    (<HTMLInputElement>document.getElementById('campoBusqueda')).value = 'zzzzzzz';
    document.getElementById('btnBuscar').click();
    expect(component.clientes.filter((cliente) => cliente.shared_key == 'zzzzzzz').length)
      .toBe(0);
  });
});
