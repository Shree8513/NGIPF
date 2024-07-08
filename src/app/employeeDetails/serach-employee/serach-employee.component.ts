import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Salary {
  name: string,
  code: string 
}
interface Treasury{
  name:string,
  code:string
}
@Component({
    selector: 'app-serach-employee',
    templateUrl: './serach-employee.component.html',
    styleUrls: ['./serach-employee.component.scss'],
})
export class SerachEmployeeComponent implements OnInit {

  // searchEmployee:FormGroup=new FormGroup({});
  dropdownItemSalaryType: Salary[]
  
  searchEmployeeForm!: FormGroup;
  dropdownItemTreasuryname:Treasury[]

    constructor(private fb:FormBuilder) {
        this.dropdownItemSalaryType = [
            { name: 'HRMS', code: 'hrms' },
            { name: 'IOSMS', code: 'iosms' },
        ];
        this.dropdownItemTreasuryname=[
          { name: '', code: '' },
            { name: '', code: '' },
        ]
    }

    ngOnInit(): void {
      
      this.initializeForm();
    }
  
    initializeForm(): void {
      this.searchEmployeeForm = this.fb.group({
        Treasury: ['', Validators.required],
        SanctionAdmin: ['', Validators.required],
        SalarySource: [null, Validators.required],
        PFDAdmin: ['', Validators.required],
        RecommendingAuthority: ['', Validators.required],
        EmployeeId: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Assuming EmployeeId is a numeric value
        PFAccountNumber: ['', Validators.required]
      });
    }

    isInvalidAndTouched(controlName: string): boolean {
      const control = this.searchEmployeeForm.get(controlName);
      return control && control.invalid && (control.dirty || control.touched);
    }
  }
  
  

