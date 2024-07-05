import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-entry-employee',
  templateUrl: './entry-employee.component.html',
  styleUrls: ['./entry-employee.component.scss']
})
export class EntryEmployeeComponent implements OnInit {

    items: MenuItem[];

    activeIndex:number=0;

    constructor(public messageService: MessageService) {}

    ngOnInit() {
        this.items = [{
                label: 'Basic',
                 command: (event: any) => {
                    this.activeIndex = 0;
                    this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});

             },
                routerLink: 'basic'
            },
            {
                label: 'Contact',
                routerLink: 'contact'
            },
            {
                label: 'Salary',
                routerLink: 'salary'
            },
            {
                label: 'Office',
                routerLink: 'office'
            },
            {
                label: 'Bank',
                routerLink: 'bank'
            }
        ];

        
    }

}
