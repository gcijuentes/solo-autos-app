import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { HttpClient } from '@angular/common/http';
import { BrandResponse } from '../../interfaces/brandResponse.interface';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  brandResponse:BrandResponse | undefined;

  constructor(private brandService:BrandService,
    private http:HttpClient) { }

  ngOnInit(): void {
    console.log('');
    this.brandService.getBrands();


  }

}
