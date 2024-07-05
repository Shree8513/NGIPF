import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pending-request-list-of-other-user',
  templateUrl: './pending-request-list-of-other-user.component.html',
  styleUrls: ['./pending-request-list-of-other-user.component.scss']
})
export class PendingRequestListOfOtherUserComponent implements OnInit {

  PendinglistForm! : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.PendinglistForm = this.fb.group({
      Office: ['', Validators.required],
      
      
    });
  }

  // Method to check if a form control is invalid and touched
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.PendinglistForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

}
