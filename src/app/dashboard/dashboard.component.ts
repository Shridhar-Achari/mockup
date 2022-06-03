import { Component, OnInit } from '@angular/core';
import studentsData from '../students.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  
  
@Component({  
selector: 'my-app',  
templateUrl: './app.component.html',  
styleUrls: [ './app.component.css' ]  
})  
export class AppComponent  {  
name = 'Angular';  
  
students: Student[] = studentsData;  
}  
