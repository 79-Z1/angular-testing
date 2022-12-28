import { Component, OnInit } from '@angular/core';
import { courseService } from './Sevices/http.service';
import { Course } from './Shared/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public newCourse: Course = { id: 7, name: 'course 7', numberOfLessons: 19 };
  title = 'unit-test';

  constructor(private courseService: courseService) {}

  ngOnInit() {
    this.courseService.createCourse(this.newCourse).subscribe({
      next: x => console.log(x),
      error: error => console.log(error)
    }); 
  }
}
