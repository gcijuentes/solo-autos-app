import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  //formulario: FormGroup;


  constructor(private carService:CarService,
      private brandService:BrandService,
      private router:Router,private fb:FormBuilder) {

        this.searchForm = this.fb.group({
          search_input: new FormControl(),
          brand_select: new FormControl()
        });
  }

  crearFormulario(){
    this.searchForm = this.fb.group({
      search_input: new FormControl(),
      brand_select: new FormControl()
    });
  }

  ngOnInit(): void {
    this.crearFormulario();



  }

  search(){
    console.log('buscando');
    this.carService.getCars();

    this.router.navigate(['list'],{queryParams:{brand:this.searchForm.value.brand_select,searchString:this.searchForm.value.search_input}});

  }
}
