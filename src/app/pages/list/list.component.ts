import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarResponse } from 'src/app/interfaces/carResponse.interface';
import { Car } from '../../interfaces/carResponse.interface';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  carList:Car[]=[];
  brand: string='';
  searchQuery: string='';

  //@Input() public totalItems: number;
  //@Input() public itemsPerPage: number;
  //@Input() public currentPage: number;

  totalItems: number= 0;
  itemsPerPage: number=0;
  currentPage: number=0;

  config: any;

  constructor(private route:ActivatedRoute,
    private carService:CarService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.brand = params['brand'];
      this.searchQuery = params['searchString'];
    });

    console.log('brand: '+this.brand);
    console.log('searchString: '+this.searchQuery);
    this.carService.getCarsParams(this.brand,this.searchQuery)
    .then((result) => {
      console.log(result);
      this.totalItems = result.data.page.totalElements;
      this.itemsPerPage = 10;
      this.currentPage = result.data.page.number;
      this.carList = result.data.content;

      console.log('this.totalItems: '+this.totalItems);
      console.log('this.itemsPerPage: '+this.itemsPerPage);
      console.log('this.currentPage: '+this.currentPage);

      console.log('carList');
      console.log(this.carList);
    }).catch((err) => {
      console.log('err:'+err);
    });

  }


  searchCars(){

    this.carService.getCarsParams(this.brand,this.searchQuery);


  }

  onPageChange(page: number) {
    console.log('page: ',page);
    this.currentPage = page;
    window.scrollTo(0, 0);
 }



   getPage(page:any) {
     //console.log('getPage -> '+page);
    // console.log(page);
     //this.planesService.getPlanesCardByPage(page);

   }

}
