import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../enquiry.service';
@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name: string;
 email: string;
 message: string;
 errors: boolean;
 errorlist: string[];
 // tslint:disable-next-line:no-inferrable-types
 sending: boolean = false;
 filename: string;
  constructor(private es: EnquiryService ) { }

  ngOnInit() {
  }

  sendEnquiry(): void {
    this.errorlist = [];
    this.errors = false;
    // tslint:disable-next-line:prefer-const
    let regex = /^[a-z][a-z_\.0-9]+@[a-z]+\.[a-z]{3,5}$/;
    if (this.name === undefined || this.name.length === 0) {
      this.errorlist.push('Name is Mandetory');
    }
    if (this.email === undefined || this.email.length === 0) {
      this.errorlist.push('Email is Mandetory');
    } else if (!regex.test(this.email)) {
      this.errorlist.push('Email is invalid');
    }

    if (this.message === undefined || this.message.length === 0) {
      this.errorlist.push('Message is Mandetory');
    }

    if (this.errorlist.length > 0) {
      this.errors = true;
    } else {
      this.sending = true;
      this.filename = 'loading.gif';
      const obj = {
        name: this.name,
        message: this.message,
        email: this.email
      };
      this.es.sendEnquiry(obj).subscribe(
        () => {
          console.log('Success call back');
          this.filename = 'messagesent.png';
          setTimeout(() => {
            this.sending = false;
            this.name = '';
            this.message = '';
            this.email = '';
          }, 3000);
        },
        () => {
          console.log('error occured');
          alert('Enquiry not sent...!');
          this.sending = false;
          this.email = '';
          this.name = '';
          this.message = '';
        }
      );
    }
  }

}
