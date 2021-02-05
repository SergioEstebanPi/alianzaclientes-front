import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from './cliente';
import { faPencilAlt, faPlus, faSearch, faShareSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NGXLogger } from 'ngx-logger';
import { ExportToCsv } from 'export-to-csv';

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
  faSearch = faSearch;
  faTimes = faTimes;

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

  generarPDF() {   
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Administrador de clientes - Alianza',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.clientes);
  }

  mostrarFormulario(estado: boolean) {
    this.mostrandoFormulario = estado;
  }

  listarClientes(): void {
    this.log(0, "Inicia consulta de clientes");
    this.clienteService.getClientes().subscribe(
      (clientesJson) => {
        let clienteLocal = Cliente.convertClientListToLocal(clientesJson);
        this.clientes = clienteLocal;
      }
    );
  }

  buscarCliente(): void {
    if(this.textoBusqueda && this.textoBusqueda != ''){
      this.clienteService.buscarCliente(this.textoBusqueda).subscribe(
        (clientesJson) => {
          if(clientesJson){
            let clientesLocal = Cliente.convertClientListToLocal(clientesJson);
            this.clientes = clientesLocal;
            this.log(1, "Consulta exitosa");
            this.log(1, clientesLocal);
          } else {
            this.clientes = [];
          }
        }, (err) => {
          this.log(0, "No se encontró ningún registro");
          this.clientes = [];
        }
      );
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
