import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    panelMenuItems: MenuItem[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            // {
            //     label: 'Bill',
            //     items: [
            //         { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
            //         { label: 'Beneficiary Master', icon: 'pi pi-plus', routerLink: ['beneficiary-master'] },
            //         { label: 'Beneficiary Insert', icon: 'pi pi-plus', routerLink: ['beneficiary-insert'] },
            //         { label: 'Generate Reference', icon: 'pi pi-plus', routerLink: ['generate-reference'] },
            //         { label: 'Approve Reference', icon: 'pi pi-plus', routerLink: ['approve-reference'] },
            //         { label: 'Generate Advice', icon: 'pi pi-plus', routerLink: ['generate-advice'] },
            //         // { label: 'Submitted Bills', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
            //         // { label: 'Saved Bills', icon: 'pi pi-fw pi-box', routerLink: ['saved-bill'] },
            //         // { label: 'Drafted Bills', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
            //         //{ label: 'Consumer Master', icon: 'pi pi-fw pi-box', routerLink: ['consumer_master'] },
            //     ]
            // },
        ];
        this.panelMenuItems = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button']}
                ]
            },
           
            // {
            //     label: 'Beneficiary Master',
            //     items: [
            //         {
            //             label: 'Insert',
            //             icon: 'pi pi-plus-circle',
            //             routerLink: ['beneficiary-insert'],

            //         },
            //         {
            //             label: 'Import',
            //             icon: 'pi pi-file-import',
            //             routerLink: ['beneficiary-import'],

            //         },
            //         {
            //             label: 'Search & Approve',
            //             icon: 'pi pi-search-plus',
            //             routerLink: ['beneficiary-master'],
            //         },

            //     ]
            // },
            // {
            //     label: 'Reference Generation',
            //     items: [
            //         {
            //             label: 'Create',
            //             icon: 'pi pi-plus-circle',
            //             routerLink: ['generate-reference']
            //         },
            //         {
            //             label: 'Search & Approve',
            //             icon: 'pi pi-search-plus',
            //             routerLink: ['approve-reference']
            //         }
    
            //     ]
            // },
            // { label: 'Advice Generation', items: 
            //     [
            //     {
            //         label: 'Create',
            //         icon: 'pi pi-plus-circle',
            //         routerLink: ['generate-advice']
            //     },
            //     {
            //         label: 'Search',
            //         icon: 'pi pi-search',
            //         routerLink: ['approve-reference']
            //     }

            // ]
                
        
            // }
        ];

    }

    
}
