import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  socialMedia = [
    {
      name: 'Linkedin',
      icon:'linkedin',
      link:'https://www.linkedin.com/in/lucasdalves/',
      humanLink: 'linkedin.com/in/lucasdalves/'
    },
    {
      name: 'GitHub',
      icon:'github',
      link:'https://github.com/Lucas-Damasceno',
      humanLink: 'github.com/Lucas-Damasceno'
    },
    {
      name: 'Behance',
      icon:'behance',
      link:'https://www.behance.net/LucasDAlves',
      humanLink: 'behance.net/LucasDAlves'
    }

  ];

  name;
  email;
  message;
  error = false;
  success = false;

  url = 'https://lucasdalves.com/email.php'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  checkForm() {

    console.log(this.name, this.email, this.message)
    if(this.name && this.email && this.message) {

      this.error = false;

      this.http.post(this.url, {
        name: this.name,
        email: this.email,
        message: this.message
      }).subscribe(res => console.log(res));

      this.success = true;

    } else {
      this.error = true;
      this.success = false;

    }


  }

}
