import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operator-list-having-ve-balance-bypassed',
  templateUrl: './operator-list-having-ve-balance-bypassed.component.html',
  styleUrls: ['./operator-list-having-ve-balance-bypassed.component.scss']
})
export class OperatorListHavingVeBalanceBypassedComponent implements OnInit {
  OperatorlistForm! : FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.OperatorlistForm = this.fb.group({
      Head_of_Account: ['', Validators.required],
      
      
    });
  }

  // Method to check if a form control is invalid and touched
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.OperatorlistForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

}
