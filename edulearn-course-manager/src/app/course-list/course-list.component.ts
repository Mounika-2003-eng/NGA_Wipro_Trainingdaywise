
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() courseSelected = new EventEmitter<Course>();

  selectCourse(course: Course) {
    // Event Binding: emit the selected course upward
    this.courseSelected.emit(course);
  }
}
