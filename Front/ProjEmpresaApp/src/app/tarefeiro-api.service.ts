import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarefeiroApiService {
  readonly tarefeiroAPIUrl = 'https://localhost:7105/api';

  constructor(private http: HttpClient) {}

  //Tarefa
  getTarefaList(): Observable<any[]> {
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefas');
  }

  addTarefa(data: any) {
    return this.http.post(this.tarefeiroAPIUrl + '/tarefas', data);
  }

  updateTarefa(id: number | string, data: any) {
    return this.http.put(this.tarefeiroAPIUrl + `/tarefas/${id}`, data);
  }

  deteleTarefa(id: number | string) {
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefas/${id}`);
  }

  //Tarefa Tipos
  getTarefaTiposList(): Observable<any[]> {
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefaTipos');
  }

  addTarefaTipos(data: any) {
    return this.http.post(this.tarefeiroAPIUrl + '/tarefaTipos', data);
  }

  updateTarefaTipos(id: number | string, data: any) {
    return this.http.put(this.tarefeiroAPIUrl + `/tarefaTipos/${id}`, data);
  }

  deteleTarefaTipos(id: number | string) {
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefaTipos/${id}`);
  }

  //Status
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.tarefeiroAPIUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.tarefeiroAPIUrl + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.tarefeiroAPIUrl + `/status/${id}`, data);
  }

  detelestatus(id: number | string) {
    return this.http.delete(this.tarefeiroAPIUrl + `/status/${id}`);
  }
}
