import { Injectable } from '@angular/core';
import { Hero } from '../Class/Hero';
import { resultResponse } from '../Class/resultResponse';
import { CommonService } from '../Services/common.Service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HelloService extends CommonService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private heroesUrl = 'http://localhost:59920/api/Dashboard/GetAll';
  heroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  
  constructor(private http: HttpClient) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
  getApiHeroes (): Observable<resultResponse<Hero[]>> {
    return  this.http.get<resultResponse<Hero[]>>(this.heroesUrl,this.httpOptions);
    // .pipe(
    //   catchError(this.handleError<resultResponse<Hero[]>>('getHeroes', []))
    // );
  }
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      console.log("Đã xảy ra lỗi");
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    }
  }
 

}
