import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { EmployeeDetailsService } from './../../core/services/employeeDetails/employee-details.service';
import { IapiResponce } from './../../core/models/iapi-responce';
import { APIResponseStatus } from 'src/app/core/enum/common_enum';

interface Salary {
  name: string,
  code: string
}
interface Treasury {
  trName: string,
  trCode: string
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
  dropdownItemTreasuryname: Treasury[] = []
  constructor(private fb: FormBuilder, private toastService: ToastService, private EmployeeDetailsService: EmployeeDetailsService) {
    this.dropdownItemSalaryType = [
      { name: 'HRMS', code: 'hrms' },
      { name: 'IOSMS', code: 'iosms' },
    ];
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getTresury()
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




  getTresury() {
    this.EmployeeDetailsService.getTresury().subscribe((Response) => {
      if (Response.apiResponseStatus == 1 || Response.apiResponseStatus == 3) {
        Response.result.map((item, index) => {
          item.trName = item.trName + " (" + item.trCode + ")"
        })
        this.dropdownItemTreasuryname = Response.result
        console.log(this.dropdownItemTreasuryname)
        // Response.result.map((item:any)=>{
        //   item.Name=this.dropdownItemTreasuryname[{item.trName,item.trCode}];
        // })
      }
    })
  }
}



