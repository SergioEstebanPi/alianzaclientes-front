import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];
  textoBusqueda:string;
  mostrarFormulario:boolean;
  clienteEditar:Cliente;

  constructor(private clienteService:ClientesService) {
    
  }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clientes = this.clienteService.getClientes();
  }

  buscarCliente(): void {
    if(this.textoBusqueda && this.textoBusqueda != ''){
      var resultado = this.clienteService.buscarCliente(this.textoBusqueda);
      console.log(resultado);
      this.textoBusqueda = "";
      if(resultado){
        this.clientes = resultado;
      } else {
        console.log("Sin resultados");
        this.clientes = [];
      }
    } else {
      this.listarClientes();
    }
  }

  limpiarBusqueda(): void {
    this.textoBusqueda = "";
    this.listarClientes();
  }

}
