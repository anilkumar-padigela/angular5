import { Pipe, PipeTransform } from '@angular/core';
import {course } from './course';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricerange: string): course[] {

    alert(pricerange);
    const temp: course[] = [];
    if (pricerange === 'All courses') {
      return  courses;
    } else if (pricerange === 'High Price') {

      for (const x in courses) {
        if (courses[x].price > 15000) {
          temp.push(CourselistComponent[x]);
        }
      }
       return temp;
    } else {

      return courses;
    }

  }
}
