import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient){ }

  listClients(): Observable<Client[]>{
    return this.http.get<Client[]>('https://crudcrud.com/api/9b900351ecda4165b8bcabe7beabf98b/client');
  }

  storeClients(client: Client): Observable<Client>{
    return this.http.post<Client>('https://crudcrud.com/api/9b900351ecda4165b8bcabe7beabf98b/client' , client);
  }

  updateClients(client: Client): Observable<any>{
    return this.http.put<any>('https://crudcrud.com/api/9b900351ecda4165b8bcabe7beabf98b/client/' + client._id , client);
  }

  deleteClients(id: string): Observable<any>{
    return this.http.delete('https://crudcrud.com/api/9b900351ecda4165b8bcabe7beabf98b/client/' + id)
  }
}
