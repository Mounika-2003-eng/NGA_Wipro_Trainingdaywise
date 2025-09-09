
import { Component } from '@angular/core';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EduLearn Course Manager';
  courses: Course[] = [
    { id: 1, title: 'Angular Basics', description: 'Learn components, templates, and data binding.', author: 'Jane Doe' },
    { id: 2, title: 'TypeScript Essentials', description: 'Strong typing, interfaces, and classes for Angular.', author: 'John Smith' },
    { id: 3, title: 'RxJS Fundamentals', description: 'Observables, operators, and reactive patterns.', author: 'Alex Kim' }
  ];

  selectedCourse: Course | null = this.courses[0];

  onCourseSelected(course: Course) {
    this.selectedCourse = course;
  }
}
