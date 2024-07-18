import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '../toast.service';
import { IapiResponce } from '../../models/iapi-responce';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { error } from 'console';
import { Message } from 'primeng/api';
@Injectable({
    providedIn: 'root',
})
export class EmployeeDetailsService {
    BaseURL: string = `${environment.BaseURL}`;
    constructor(private http: HttpClient, private toastService: ToastService) {}

    getTresury(): Observable<IapiResponce> {
        return this.http.get<IapiResponce>(this.BaseURL + 'api/Treasery/GetAllTreasury').pipe(
            catchError((error) => {
                throw this.toastService.showError(error.Message);
            })
        );
    }

    getPfdAdmin(): Observable<IapiResponce> {
        return this.http.get<IapiResponce>(this.BaseURL + 'api/Pfdadmin/GetAllPFDAdmin').pipe(
            catchError((error) => {
                throw this.toastService.showError(error.Message);
            })
        );
    }

    getSanctionAdmin(): Observable<IapiResponce> {
        return this.http.get<IapiResponce>(this.BaseURL + 'api/Sanction/GetAllSanction').pipe(
            catchError((error) => {
                throw this.toastService.showError(error.Message);
            })
        );
    }

    getHOA(): Observable<IapiResponce> {
        return this.http.get<IapiResponce>(this.BaseURL + 'api/Treasery/GetAllHeadOfAccount').pipe(
            catchError((error) => {
                throw this.toastService.showError(error.Message);
            })
        );
    }


    viewEmployee(trCode:string,pfdCode:number,sanctionCode:number):Observable<IapiResponce>{
        return this.http.get<IapiResponce>(this.BaseURL+'api/v1/ViewEmp/GetEmpView?Treasury='+trCode+'&PFD_Admin='+pfdCode+'&Sanction_Admin='+sanctionCode).pipe(
            catchError((error) => {
              throw this.toastService.showError(error.message);
            })
          );

    }
}
