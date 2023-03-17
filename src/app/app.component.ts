import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  progRam: string = '';
  idNo: string = '';
  cgPA: string = '';
  students: Student[] = [];

  submit() {
    const student = { firstName: this.firstName, lastName: this.lastName, progRam: this.progRam , idNo: this.idNo,cgPA: this.cgPA};
    this.students.push(student);
    this.firstName = '';
    this.lastName = '';
    this.progRam = '';
    this.idNo = '';
    this.cgPA = '';
  }
}

class Student {
  firstName: string = '';
  lastName: string = '';
  progRam: string = '';
  idNo: string = '';
  cgPA: string = '';

}