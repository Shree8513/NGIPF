import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Salary {
  name: string,
  code: string 
}
@Component({
    selector: 'app-serach-employee',
    templateUrl: './serach-employee.component.html',
    styleUrls: ['./serach-employee.component.scss'],
})
export class SerachEmployeeComponent implements OnInit {

  // searchEmployee:FormGroup=new FormGroup({});
  dropdownItemSalaryType: Salary[]
  selectedItemSalary: Salary
    constructor() {
        this.dropdownItemSalaryType = [
            { name: 'HRMS', code: 'hrms' },
            { name: 'IOSMS', code: 'iosms' },
        ];
    }

    ngOnInit(): void {
      
    }
}
