import { Component, Input, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cliente:Cliente = new Cliente();
  titulo:string = "Create New Client";
  
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  create():void{
    console.log("Clicked");
    console.log(this.cliente);
    this.clientesService.crearCliente(this.cliente);
    console.log("Cliente creado");
    this.cliente = new Cliente();
  }
}
