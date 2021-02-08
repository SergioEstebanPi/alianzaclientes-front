import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[];
  private urlEndpoint:string = "http://localhost:8080/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(
      this.urlEndpoint
    );;
  }

  crearCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(
      this.urlEndpoint,
      cliente,
      {headers : this.httpHeaders}
    );
  }

  buscarCliente(shared_key):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.urlEndpoint}/${shared_key}`);
  }
}