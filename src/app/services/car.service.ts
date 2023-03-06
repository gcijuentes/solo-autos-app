import { Injectable, EventEmitter } from '@angular/core';
import { CarResponse, Car } from '../interfaces/carResponse.interface';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CarByIdResponse } from '../interfaces/carByIdResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carResponse:CarResponse | undefined;

  public length$ = new EventEmitter<any>();
  public pageOffset$ = new EventEmitter<any>();
  public pageIndex$ = new EventEmitter<any>();

  constructor(private http:HttpClient) {

  }


  getCars():Promise<CarResponse>{
    return this.http.get<CarResponse>(`${environment.api_url}/cars`)
    .toPromise();
    /*subscribe(resp=>{
        console.log('resp:');
        console.log(resp);
    });*/
  }

  getCarsParams(brand:string, searchInput:string):Promise<CarResponse>{
    console.log('[CarService][getCarsParams] - start');
    console.log('[CarService][getCarsParams] - brand:',brand);
    console.log('[CarService][getCarsParams] - searchInput:',searchInput);

    let params = new HttpParams();

    if(brand != undefined ){
      console.log('[CarService][getCarsParams] - agregamos brand');
      params = params.append('brand', brand);
    }


    if( searchInput != undefined){
      console.log('[CarService][getCarsParams] - agregamos searchInput');
      params = params.append('searchString', searchInput);
    }

    params = params.append('size', '20000');

    console.log('[CarService][getCarsParams] - end');
    return this.http.get<CarResponse>(`${environment.api_url}/cars`,{params:params})
    .toPromise();
    /*subscribe(resp=>{
        console.log('resp:');
        console.log(resp);
    });*/


  }


  getCarById(id:number):Promise<CarByIdResponse>{
      return this.http.get<CarByIdResponse>(`${environment.api_url}/cars/`+id)
      .toPromise();
  }



}
