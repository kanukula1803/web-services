import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataServiceHotel: any;
  

  constructor(private _http: HttpClient) {
    this.dataServiceHotel = [];
  }

getHotelsData(){

}
setHotelsData(){

}
  }

