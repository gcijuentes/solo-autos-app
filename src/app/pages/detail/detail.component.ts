import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/carByIdResponse.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number=0;
  car:Car = {} as Car;


  constructor(private route:ActivatedRoute,
    private carService:CarService) { }

  ngOnInit(): void {
    console.log('ngOnInit - detail');

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });


    console.log('id:'+this.id);

    if(this.id>0){
      this.carService.getCarById(this.id).then
      ((result)=>{
        console.log('result');
        console.log(result);
        if(result.data.length>0){
          this.car = result.data[0];
        }
        console.log('this.car');
        console.log(this.car);
      }).catch((error)=>{
        console.log('error: '+error);
      });
    }


  }

}
