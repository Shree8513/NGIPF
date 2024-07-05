import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-entry-employee',
    templateUrl: './entry-employee.component.html',
    styleUrls: ['./entry-employee.component.scss'],
})
export class EntryEmployeeComponent implements OnInit {
    activeState: boolean[] = [true, false, false];
    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }
    addPersonal!: FormGroup;
    addService!: FormGroup;
    maxDateValue: Date = new Date(Date.now());
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initializeForm();
        this.initializeSeviceForm();
    }
    initializeForm(): void {
        this.addPersonal = this.fb.group({
            empID: ['', Validators.required],
            pfAcc: ['', Validators.required],
            name: ['', Validators.required],
            gender: ['', Validators.required],
            religion: ['', Validators.required],
            selectedDOB: [null, Validators.required],
            pan: ['', Validators.required],
            adhaar: ['', Validators.required],
            maritalStatus: ['', Validators.required],
            selectedEffectFormDate: [null, Validators.required],
        });
    }
    initializeSeviceForm(): void {
        this.addService = this.fb.group({
            GPFNo: [''],
            pfAccStatus: ['', Validators.required],
            selectedDOJ: [null, Validators.required],
            approvalNo: ['', Validators.required],
            selectedApprovalDate: [null, Validators.required],
            selectedEffecteDate: [null, Validators.required],
            type: ['',Validators.required],
            selectedEffectFormDate:[null, Validators.required],
            designation:['',Validators.required],
            gpfcpf:['',Validators.required],
            selectedDOR:[null, Validators.required],
            tot:['',Validators.required],
            selectedDOT:[null, Validators.required],
        });
    }

    isInvalidAndTouched(controlName: string): boolean {
        const control = this.addPersonal.get(controlName);
        return control && control.invalid && (control.dirty || control.touched);
    }
}
