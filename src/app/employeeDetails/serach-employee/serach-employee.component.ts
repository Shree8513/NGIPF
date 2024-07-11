import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchEmployee } from 'src/app/core/models/employeeDetails/employeeDetails';
import { EmployeeDetailsService } from 'src/app/core/services/employeeDetails/employee-details.service';
import { ToastService } from 'src/app/core/services/toast.service';

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
  employeeSearchPayload!: searchEmployee

    constructor(private fb:FormBuilder, private toastService: ToastService, private employeeDetails: EmployeeDetailsService) {
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

    searchEmployee() {
      if (this.searchEmployeeForm.valid) {
        this.employeeSearchPayload = {
          EmployeeId: this.searchEmployeeForm.value.EmployeeId,
          PFAccountNumber: this.searchEmployeeForm.value.PFAccountNumber,
          PFDAdmin: this.searchEmployeeForm.value.PFDAdmin,
          RecommendingAuthority: this.searchEmployeeForm.value.RecommendingAuthority,
          SalarySource: this.searchEmployeeForm.value.SalarySource,
          Treasury: this.searchEmployeeForm.value.Treasury,
          SanctionAdmin: this.searchEmployeeForm.value.SanctionAdmin,
        }
        this.employeeDetails.searchEmployee(this.employeeSearchPayload).subscribe((respose) => {
          if (respose.apiResponseStatus == 1) {
            console.log(respose.result);
          } else {
            this.toastService.showError(respose.message)
          }
        })
      } else {
        this.toastService.showWarning("Please fill all the details")
      }
    }
  }
  
  

