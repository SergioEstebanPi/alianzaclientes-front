import { Component, Input, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cliente:Cliente = new Cliente();
  titulo:string = "Create New Client";
  @Input() mostrar: boolean = true;
  @Output() formularioEvento = new EventEmitter<boolean>();
  
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  mostrarFormulario(value: boolean) {
    this.formularioEvento.emit(value);
  }

  create():void{
    console.log("Clicked");
    console.log(this.cliente);
    this.clientesService.crearCliente(this.cliente);
    console.log("Cliente creado");
    this.cliente = new Cliente();
  }
}
