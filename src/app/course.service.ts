import { Injectable } from '@angular/core';
import {course} from './course';
@Injectable()
export class CourseService {

  private courselist: course[];

  constructor() {
    this.courselist = [
      {
        name: ' Angular ',
        image: 'image.jpg',
        price: 19000,
        description: 'Googles single page app framework'
      },
        {
          name: 'Angular',
          image: 'image.jpg ',
          price: 19000,
          description: 'Googles single page app framework '
        },
          {
            name: 'Angular',
            image: 'image.jpg',
            price: 19000,
            description: 'Googles single page app framework',
          },
           {
              name: 'Angular',
              image: 'image.jpg',
              price: 19000,
              description: 'Googles single page app framework',
            },
              {
                name: 'Angular',
                image: 'image.jpg',
                price: 19000,
                description: 'Googles single page app framework',
              },

   ];
  }

  getCourses(): course[] {
    return this.courselist;
  }
  }

