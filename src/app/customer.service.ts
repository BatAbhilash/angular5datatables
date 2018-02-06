import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  private customerUrl = 'http://localhost:50565/api/Customer'; 

  constructor(private http: HttpClient) { }

  getCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerUrl).pipe();
  }
  

}
