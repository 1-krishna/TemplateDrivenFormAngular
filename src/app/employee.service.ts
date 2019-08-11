import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  employees: Employee[] = [
    {id: 101, name:'Krishna', salary:500}
  ];
  constructor() { }

  getEmployees():Employee[]{
    return this.employees;
  }

  addEmployee(employee: Employee){
    this.employees.push(employee);
  }
}
