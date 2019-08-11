import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  add(f){
    var emp : Employee = {id:f.value.id, name:f.value.name, salary:f.value.salary}
    console.log(f);
    this.employeeService.addEmployee(emp);
    
  }
}
