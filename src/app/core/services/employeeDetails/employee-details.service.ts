import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '../toast.service';
import { IapiResponce } from '../../models/iapi-responce';
import { Observable, catchError } from 'rxjs';
import { searchEmployee } from '../../models/employeeDetails/employeeDetails';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class EmployeeDetailsService {
    BaseURL: string = `${environment.BaseURL}`;
    constructor(private http: HttpClient, private toastService: ToastService) {}

    searchEmployee(payload: searchEmployee): Observable<IapiResponce> {
        return this.http.post<IapiResponce>(this.BaseURL + 'api/EmployeeDetails/SearchEmployee', payload).pipe(
            catchError((error) => {
                throw this.toastService.showError(error.message);
            })
        );
    }
}
