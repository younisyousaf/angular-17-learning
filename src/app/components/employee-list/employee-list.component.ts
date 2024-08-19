import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: 'John Doe', age: 25, salary: 5000 },
    { id: 2, name: 'Jane Smith', age: 30, salary: 6000 },
    { id: 3, name: 'Bob Johnson', age: 40, salary: 7000 },
  ];

  employeeList() {
    const randomId = Math.floor(Math.random() * 1000) + 4;
    const randomNames = [
      'Alice Brown',
      'Charlie White',
      'Daisy Green',
      'Edward Black',
      'Fiona Blue',
    ];
    const randomName =
      randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomAge = Math.floor(Math.random() * 30) + 20;
    const randomSalary = Math.floor(Math.random() * 5000) + 4000;

    const randomEmployee = {
      id: randomId,
      name: randomName,
      age: randomAge,
      salary: randomSalary,
    };

    this.employees.push(randomEmployee);
  }
  deleteEmployee(employeeId: number) {
    this.employees = this.employees.filter(
      (employee) => employee.id !== employeeId
    );
  }
}
