import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills = [
    {
      name: 'HTML 5',
      percentage: 9,
      icon: 'html5'
    },
    {
      name: 'CSS 3',
      percentage: 8,
      icon: ''
    },

    {
      name: 'Javascript',
      percentage: 8,
      icon: ''
    },

    {
      name: 'Angular',
      percentage: 7,
      icon: ''
    },

    {
      name: 'Vue.js',
      percentage: 6,
      icon: ''
    },

    {
      name: 'Php',
      percentage: 6,
      icon: ''
    },

    {
      name: 'MySQL',
      percentage: 6,
      icon: ''
    },

    {
      name: 'Arduíno',
      percentage: 8,
      icon: ''
    },

    {
      name: 'Photoshop',
      percentage: 7,
      icon: ''
    },

    {
      name: 'Illustrator',
      percentage: 6,
      icon: ''
    },

    {
      name: 'Indesign',
      percentage: 5,
      icon: ''
    },


  ]

  academicFormation = [
    {
      year: '2014 ~ 2015',
      name: 'Design Multimídia',
      organization: 'Obra Social Dom Bosco',
      description: 'Integração do Web Design (Atividade do Design voltado à projetos na internet), da Arquitetura da Informação, da Animação e da Manipulação de áudio e Vídeo.',
      icon: ''
    },
    {
      year: '2015 ~ 2018',
      name: 'Design Digital',
      organization: 'Universidade Anhembi Morumbi',
      description: 'A Graduação em Design Digital da Anhembi Morumbi é um bacharelado pioneiro neste segmento, considerada uma referência nacional.',
      icon: ''
    },
    {
      year: '2015 ~ 2018',
      name: 'Introdução ao Vue.js',
      organization: 'Udemy',
      description: 'Você vai aprender os conceitos iniciais e vai avançar a cada aula entrando no mundo do desenvolvimento com Vue JS de uma forma bem tranquila.',
      icon: ''
    },
    {
      year: '2019',
      name: 'Formação Angular',
      organization: 'Alura',
      description: 'Aprenda as vantagens de um dos frameworks mais utilizados no mundo e requisitados no mercado!',
      icon: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
