import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandResponse } from '../interfaces/brandResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brandResponse:BrandResponse | undefined;

  constructor(private http:HttpClient) { }

  getBrands():Promise<BrandResponse>{
    return this.http.get<BrandResponse>(`${environment.api_url}/brands`)
    .toPromise();
  }

}
