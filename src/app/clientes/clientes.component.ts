import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from './cliente';
import { faPencilAlt, faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];
  textoBusqueda:string;
  mostrandoFormulario:boolean;
  clienteEditar:Cliente;
  faPlus = faPlus;
  faShareSquare = faShareSquare;
  faPencilAlt = faPencilAlt;

  constructor(private clienteService:ClientesService,
    private logger:NGXLogger) {
    
  }

  ngOnInit(): void {
    this.listarClientes();
  }

  log(lvl, message){
    switch(lvl){
      case 0:
        this.logger.debug(message);
        break;
      case 1:
        this.logger.info(message);
        break;
      case 2:
        this.logger.log(message);
        break;
      case 3:
        this.logger.warn(message);
        break;
      case 4:
        this.logger.error(message);
        break;
    }
  }

  mostrarFormulario(estado: boolean) {
    this.mostrandoFormulario = estado;
  }

  listarClientes(): void {
    this.log(0, "Inicia consulta de clientes");
    this.clientes = this.clienteService.getClientes();
  }

  buscarCliente(): void {
    if(this.textoBusqueda && this.textoBusqueda != ''){
      var resultado = this.clienteService.buscarCliente(this.textoBusqueda);
      this.textoBusqueda = "";
      this.log(1, resultado);
      if(resultado){
        this.log(1, "Consulta exitosa");
        this.clientes = resultado;
      } else {
        this.log(0, "No se encontró ningún registro");
        this.clientes = [];
      }
    } else {
      this.listarClientes();
      this.log(0, "Campo de búsqueda vacío");
    }
  }

  limpiarBusqueda(): void {
    this.log(0, "Limpio campos y consulto los registros");
    this.textoBusqueda = "";
    this.listarClientes();
  }

}
