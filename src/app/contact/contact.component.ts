import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    
  }

}
