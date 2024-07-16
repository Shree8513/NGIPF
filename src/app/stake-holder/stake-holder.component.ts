import { Component, OnInit } from '@angular/core';
import { StakeHolderService } from '../core/services/stakeHolder/stake-holder.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-stake-holder',
  templateUrl: './stake-holder.component.html',
  styleUrls: ['./stake-holder.component.scss']
})

export class StakeHolderComponent implements OnInit {
  stakeHolder: any[] = [];

  constructor(
    private stakeHolderService: StakeHolderService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getStakeHolder();
  }

  getStakeHolder(): void {
    this.stakeHolderService.getStakeHolder().subscribe(
      (response: any) => {
        console.log('API response:', response); // Add this line
        if (response.apiResponseStatus == 0|| response.apiResponseStatus == 1|| response.apiResponseStatus == 3) {
          response.result.map((item: any) => {});
          this.stakeHolder = response.result;
          console.log('Stakeholders:', this.stakeHolder); // Add this line
        } else {
          this.toastService.showAlert(response.message, response.apiResponseStatus);
        }
      },
      (error: any) => {
        console.error('Error fetching stakeholders:', error); // Add this line
        this.toastService.showError('Error fetching stakeholders');
      }
    );
  }

  editStakeHolder(){

  }
  addStakeHolder(){
    
  }

}
