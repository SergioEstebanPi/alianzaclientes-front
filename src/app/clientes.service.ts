import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[];

  constructor() {
  }

  getClientes():Cliente[]{
    this.clientes = [
      {
        id: "1",
        shared_key: "jgutierrez",
        business_id: "Juliana Gutierrez",
        email: "jgutierrez@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "2",
        shared_key: "mmartinez",
        business_id: "Manuel Martinez",
        email: "mmartinez@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "3",
        shared_key: "aruiz",
        business_id: "Ana Ruíz",
        email: "aruiz@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "4",
        shared_key: "ogarcia",
        business_id: "Oscar García",
        email: "ogarcia@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "5",
        shared_key: "tramos",
        business_id: "Tania Ramos",
        email: "tramos@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "6",
        shared_key: "cariza",
        business_id: "Carlos Ariza",
        email: "cariza@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "7",
        shared_key: "rvillaneda",
        business_id: "Rodrigo Villaneda",
        email: "rvillaneda@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      },
      {
        id: "8",
        shared_key: "mfonseca",
        business_id: "Mauricio Fonseca",
        email: "mfonseca@gmail.com",
        phone: "3219876543",
        date_added: "20/05/2019"
      }
    ];

    return this.ordernarArreglo(this.clientes);
  }

  buscarCliente(shared_key):Cliente[]{
    var resultado = this.clientes.filter((cliente) => cliente.shared_key.toLowerCase().includes(shared_key.toLowerCase()));
    return this.ordernarArreglo(resultado);
  }

  ordernarArreglo(arreglo){
    return arreglo.sort((n1, n2) => {
      if(n1.shared_key > n2.shared_key){
        return 1;
      }
      if(n1.shared_key < n2.shared_key){
        return -1;
      }
      return 0;
    });
  }
}