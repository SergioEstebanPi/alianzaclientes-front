export class Cliente {
  id: string;
  shared_key: string;
  business_id: string;
  email: string;
  phone: string;  
  date_added: string;

  public static convertToJSON(cliente:Cliente){
    let clienteJSON: any = {};
    clienteJSON.id = cliente.id;
    clienteJSON.sharedKey = cliente.shared_key;
    clienteJSON.businessId = cliente.business_id;
    clienteJSON.email = cliente.email;
    clienteJSON.phone = cliente.phone;
    clienteJSON.dateAdded = cliente.date_added;
    return clienteJSON;
  }

  public static convertToLocal(cliente:any){
    let clienteLocal: Cliente = new Cliente();
    clienteLocal.id = cliente.id;
    clienteLocal.shared_key = cliente.sharedKey;
    clienteLocal.business_id = cliente.businessId;
    clienteLocal.email = cliente.email;
    clienteLocal.phone = cliente.phone;
    clienteLocal.date_added = cliente.dateAdded;
    return clienteLocal;
  }

  public static convertClientListToLocal(clientes:any[]){
    let listaNueva: Cliente[] = [];
    for(let clienteJson of clientes){
      listaNueva.push(this.convertToLocal(clienteJson));
    }
    return listaNueva;
  }

  public static convertClientListToJSON(clientes:Cliente[]){
    let listaNueva: any = [];
    let clienteNew = null;
    for(clienteNew in clientes){
      listaNueva.push(this.convertToJSON(clienteNew));
    }
    return listaNueva;
  }
}
