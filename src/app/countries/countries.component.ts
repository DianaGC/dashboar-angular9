import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  
  countries = [
    {
      id:'1',
      code: "ABC8441189035",
      name: "Ecuador"
    },
    {
      id:'2',
      code: "DEF6510463347",
      name: "Colombia"
    },
    {
      id:'3',
      code: "GHI0831819467",
      name: "Handbags"
    }
  ]
  dataSource = this.countries;
  displayedColumns: string[] = ['id', 'name', 'code', 'action'];
  countryForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.countryForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],

    })
  }
  get formControls() { return this.countryForm.controls; }

  saveData(){
    console.log(this.countries);
    console.log(this.countryForm.value);
    this.countries.push(this.countryForm.value);
    console.log(this.countries);    
  }

  removeData(){}

}
