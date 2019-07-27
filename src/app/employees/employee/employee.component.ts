import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})
export class EmployeeComponent implements OnInit {
  datafromService: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    //this.datafromService = this.employeeService.caseDetails;
    // console.log(this.datafromService);
    // console.log(this.employeeService.selectedEmployee);
    this.resetFrom();
  }
  onSubmit(form: NgForm) {
    this.employeeService.postEmployee(form.value)
      .subscribe(data => {//subscribe only works for functions which return and not void
        this.resetFrom(form);
      })
  }
  resetFrom(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      Id: null,
      FirstName: '',
      LastName: '',
      EmailId: '',
      Password: ''
    }
  }
}
