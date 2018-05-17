import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../course.service';
import { course } from '../../../course';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  private courselist: course[];
  pricerange: String = 'All courses';

  constructor(private cs: CourseService) {
    this.courselist = cs.getCourses();
  }

  ngOnInit() {
  }

}
