import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from '../model/timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: HttpClient) { }

  public ConsultarHorario(inputZone: string): Observable<Horario>{
    return this.http.get<Horario>('http://worldtimeapi.org/api/timezone/' + inputZone);
  }

}
