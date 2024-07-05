import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-capture-pf-interest-year',
  templateUrl: './capture-pf-interest-year.component.html',
  styleUrls: ['./capture-pf-interest-year.component.scss']
})
export class CapturePfInterestYearComponent implements OnInit {

  capturePfInterestYear!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.capturePfInterestYear = this.fb.group({
      DebitHeadOfAccount: ['', Validators.required],
      HeadOfAccount: ['', Validators.required],
      OperatorName: ['', Validators.required],
      SearchBy: ['', Validators.required],
      Status: ['', Validators.required]
    });
  }

  // Method to check if a form control is invalid and touched
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.capturePfInterestYear.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }


}