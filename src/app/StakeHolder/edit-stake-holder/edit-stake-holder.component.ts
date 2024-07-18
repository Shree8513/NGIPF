import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SanctionAdminCount {
    sanctionAdminCount: string;
}
interface SanctionAdminNature {
    sanctionAdminNature: string;
}
interface RecommendingAuthorityReq {
    required: string;
}
interface RecommendingAuthorityCount {
    count: string;
}

@Component({
    selector: 'app-edit-stake-holder',
    templateUrl: './edit-stake-holder.component.html',
    styleUrls: ['./edit-stake-holder.component.scss'],
})
export class EditStakeHolderComponent implements OnInit {
    value: boolean = false;
    editStakeHolder!: FormGroup;
    dropdownSanctionAdminCount: SanctionAdminCount[] = [];
    dropdownSanctionAdminNature: SanctionAdminNature[] = [];
    dropdownRecommendingAuthorityReq: RecommendingAuthorityReq[] = [];
    dropdownRecommendingAuthorityCount: RecommendingAuthorityCount[] = [];

    constructor(private fb: FormBuilder) {
        this.dropdownSanctionAdminCount = [
            { sanctionAdminCount: 'Single' },
            { sanctionAdminCount: 'Single & Same' },
            { sanctionAdminCount: 'Multiple' }
        ];
        this.dropdownSanctionAdminNature = [
            { sanctionAdminNature: 'Type 1' },
            { sanctionAdminNature: 'Type 2' },
            { sanctionAdminNature: 'Type 3' }
        ];
        this.dropdownRecommendingAuthorityReq = [
            { required: 'Yes' },
            { required: 'No' }
        ];
        this.dropdownRecommendingAuthorityCount = [
            { count: 'Single' },
            { count: 'Multiple' }
        ];
    }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.editStakeHolder = this.fb.group({
            HOA:[{ value: '', disabled: !this.value }, Validators.required],
            PFDAdmin: [{ value: '', disabled: !this.value }, Validators.required],
            dropdownSanctionAdminCount: [{ value: '', disabled: !this.value }, Validators.required],
            dropdownSanctionAdminNature:[{ value: '', disabled: !this.value }, Validators.required],
            dropdownRecommendingAuthorityReq: [{ value: '', disabled: !this.value }, Validators.required],
            dropdownRecommendingAuthorityCount: [{ value: '', disabled: !this.value }, Validators.required],
            recommAuthorityNature: [{ value: '', disabled: !this.value }, Validators.required],
        });
    }

    isInvalidAndTouched(controlName: string): boolean {
        const control = this.editStakeHolder.get(controlName);
        return control && control.invalid && (control.dirty || control.touched);
    }

    toggleEdit(event: any): void {
      const enabled = event.checked;
      if (enabled) {
          this.editStakeHolder.enable();
      } else {
          this.editStakeHolder.disable();
      }
    }
    resetForm(): void {
        this.editStakeHolder.reset();
    }

    search(): void {
        if (this.editStakeHolder.valid) {
            // Handle search logic here
        }
    }
}
