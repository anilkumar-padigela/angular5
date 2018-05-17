import { Component, OnInit, Input } from '@angular/core';
import { course } from '../../../course';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('course') current: course;
  constructor() { }

  ngOnInit() {
  }

}
