import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { IapiResponce } from '../models/iapi-responce';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApproveReferenceService {
  BaseURL:string = `${environment.BaseURL}`;
  constructor(private http: HttpClient, private toastService: ToastService) {
    
   }
  
   getAllUnapporovedReference(): Observable<IapiResponce> {
    return this.http.get<IapiResponce>(this.BaseURL+'api/Reference/GetAllReferences').pipe(
      catchError((error) => {
        throw this.toastService.showError(error.message);
      })
    );
  }
   getUnapporovedReferenceByRefType(ref_type:any): Observable<IapiResponce> {
    return this.http.get<IapiResponce>(this.BaseURL+'api/Reference/UnApprovedReferencesByRefType?ref_type='+ref_type).pipe(
      catchError((error) => {
        throw this.toastService.showError(error.message);
      })
    );
  }
  getUnapporovedReferenceByRefNo(ref_No:any): Observable<IapiResponce> {
    return this.http.get<IapiResponce>(this.BaseURL+'api/Reference/GetByRefNo?ref_no='+ref_No).pipe(
      catchError((error) => {
        throw this.toastService.showError(error.message);
      })
    );
  }
 
}
