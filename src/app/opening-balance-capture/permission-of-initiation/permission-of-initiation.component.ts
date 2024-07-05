import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permission-of-initiation',
  templateUrl: './permission-of-initiation.component.html',
  styleUrls: ['./permission-of-initiation.component.scss']
})
export class PermissionOfInitiationComponent implements OnInit {

  PermissionForm ! : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.PermissionForm = this.fb.group({
      Search_By: ['', Validators.required],
      Treasury: ['', Validators.required],
      Head_Of_Account: ['', Validators.required],
      
      
    });
  }

  // Method to check if a form control is invalid and touched
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.PermissionForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }


}
