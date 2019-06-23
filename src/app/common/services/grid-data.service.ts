import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRepository } from '../respository';
@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private httpClient: HttpClient, private data: DataRepository) { }

  getColData(type): Observable<any>  {
   const tempdata = this.data.getCols(type);
   const studentsObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(tempdata);
      }, 1000);
    });
   return studentsObservable;
  }
}
