import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET,OPTIONS'
  })
};
export interface Stop {
  city: string;
  coords: number[];
  name: string;
 id: string;
  type: string;
}
export interface Time {
  arrivalTime: string;
  scheduledTime: string;
  id: string;
  line: string;
  direction: string;
  platform: string[],
  arrivalTimeRelative: number;
  scheduledTimeRelative: number;
  delayTime: number;
  state: string;
  mode: string[];
  diva: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StopService {

  constructor(private http: HttpClient) { }

  getStopsBus(): Observable<Stop[]> {
    return this.http.get<Stop[]>(environment.STOP_API);
  }
  getDepartureTime(id:string): Observable<Time[]> {
    return this.http.get<Time[]>(environment.TIME_API + id);
  }
}
