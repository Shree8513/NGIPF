import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-entry-employee',
    templateUrl: './entry-employee.component.html',
    styleUrls: ['./entry-employee.component.scss'],
})
export class EntryEmployeeComponent implements OnInit {
    activeState: boolean[] = [false, false, false,false,false,false,false,false,false,false];
    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }
    addPersonal!: FormGroup;
    addService!: FormGroup;
    addContact!:FormGroup;
    addSalary!:FormGroup;
    addPfOffice!:FormGroup;
    addDDO!:FormGroup;
    addLFOperator!:FormGroup;
    addBank!:FormGroup;

    checked: boolean = false;
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
        this.addBank=this.fb.group({
            ifsc:['', Validators.required],
            bankName:['', Validators.required],
            accNo:['',Validators.required],
            conAccNo:['', Validators.required],
            benName:['', Validators.required],
            selectedWED:[null,Validators.required],
            remarks:['',Validators.required],
        });
        this.addContact=this.fb.group({
            mobileno:[''],
            emailId:[''],
            line1:[''],
            line2:[''],
            state:[''],
            district:[''],
            pinCode:[''],
            selectedAED:[null,Validators.required],
            checked:['']
        });
        this.addSalary=this.fb.group({
            auto:[''],
            selectedWED:[null,Validators.required],
            basicPay:[''],
            gradePay:[''],
        });
        this.addPfOffice=this.fb.group({
            HOOCode:[''],
            offName:[''],
            pfdAdmin:[''],
            WED:[''],
            RecommAdmin:[''],
            sancationAdmin:[''],
            pfAdmin:[''],
        })
        this.addDDO=this.fb.group({
            DDOCode:[''],
            tresuryCode:[''],
            WED:[''],
        });
        this.addLFOperator=this.fb.group({
            OperatorName:[''],
            tresuryCode:[''],
            WED:[''],
        })
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
