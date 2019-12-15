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

  getallfiles():Observable<any>{
    return this.http.get(this.uploadServiceEndpoint+"getallfiles");
  }

  deletefiles(name){
    return this.http.delete(this.uploadServiceEndpoint+"delete/"+name,{responseType:"text"});
  }


    }