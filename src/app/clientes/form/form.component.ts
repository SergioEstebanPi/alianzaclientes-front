import { Component, Input, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Output, EventEmitter } from '@angular/core';
import {formatDate} from '@angular/common';
import { NGXLogger } from 'ngx-logger';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo:string = "Create New Client";
  @Input() mostrar: boolean = true;
  @Input() cliente: Cliente = new Cliente();
  @Output() formularioEvento = new EventEmitter<boolean>();
  @Output() creadoEvento = new EventEmitter<boolean>();
  
  constructor(private clientesService:ClientesService,
    private logger:NGXLogger) { 
      
    }

  ngOnInit(): void {
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

  mostrarFormulario(value: boolean) {
    this.log(0, "Se cierra ventana formulario cliente");
    this.formularioEvento.emit(value);
  }

  create(clientForm):void{
    this.log(0, this.cliente);
    if(clientForm.form.valid){
      this.cliente.date_added = formatDate(new Date(), 'dd/MM/yyyy', 'en');
      let shared_key = this.cliente.shared_key;
      this.clientesService.crearCliente(Cliente.convertToJSON(this.cliente)).subscribe(
        respuesta => {
          this.log(0, "New client created");
          swal("New client",
              `Client ${shared_key} created successfully!`,
              'success');
          this.creadoEvento.emit(true);
        }
      );
      this.cliente = new Cliente();
      clientForm.form.reset();
    } else {
      this.log(3, "Campos inválidos");
    }
  }

  update(clientForm):void{
    this.log(0, this.cliente);
    if(clientForm.form.valid){
      let shared_key = this.cliente.shared_key;
      this.clientesService.actualizarCliente(Cliente.convertToJSON(this.cliente)).subscribe(
        respuesta => {
          this.log(0, "Client updated");
          swal("Client updated",
              `Client ${shared_key} updated successfully!`,
              'success');
          this.creadoEvento.emit(true);
        }
      );
      this.cliente = new Cliente();
      clientForm.form.reset();
    } else {
      this.log(3, "Campos inválidos");
    }
  }
}
