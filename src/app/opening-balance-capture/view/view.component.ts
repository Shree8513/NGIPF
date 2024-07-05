import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  viewForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.viewForm = this.fb.group({
      Head_of_Account: ['', Validators.required],
      PFDAdmin: ['', Validators.required],
      Treasury: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Assuming EmployeeId is a numeric value
      
      
    });
  }

  // Method to check if a form control is invalid and touched
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.viewForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }
}


