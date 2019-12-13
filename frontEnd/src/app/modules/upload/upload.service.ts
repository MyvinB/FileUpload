import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadServiceEndpoint:string = "http://localhost:8081/api/";
  constructor(private http: HttpClient) { }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
  
  upload(File):Observable<any> {
    const formData = new FormData();
    formData.append('file', File);
    return this.http.post(this.uploadServiceEndpoint,formData,{
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    }).pipe(
      catchError(this.errorMgmt)
     ) }


    }