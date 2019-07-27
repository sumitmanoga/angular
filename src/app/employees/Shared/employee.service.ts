import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';
@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  public caseDetails = {
    partyId: '1',
    address: {
      state: 'mystate',
      city: 'city s',
      zip: 'zip s',
      street: 'street s'
    }
  }
  constructor(private http: Http) {
    this.selectedEmployee = new Employee();
  }
  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer QWPjMr7pexRaaFe4PlU_zEEb1sF4LxZumoADnLvjfAdI801ghLUdTKjva1eiAp9NA5rbF0J_CfZqeR7eB3gaBtMcETNP_dl6XlQiZP15UqgIrw0jFh0VYCEFDVCqbHC_HSciPLpgdWLD9N6DG7EoU6ZtVd4N_mdedPpDkD7h3m8dsobhitWBscWvqmZRFPtA' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:40760/api/employee', body, requestOptions).pipe(map((response: any) => response.json()));
  }
}
