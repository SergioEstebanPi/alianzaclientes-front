import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[];
  private urlEndpointGet:string = "http://localhost:8080/api/clientes";
  private urlEndpoint:string = "http://localhost:8080/api/cliente";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(
      this.urlEndpointGet
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