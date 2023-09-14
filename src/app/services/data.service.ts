import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studentsArray: Student[] = []

  constructor() { }

  addStudent(student: Student){
    this.studentsArray.push(student);
    console.log(this.studentsArray)
  }

}
