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
      icon: 'css3'
    },

    {
      name: 'Javascript',
      percentage: 8,
      icon: 'javascript'
    },

    {
      name: 'Angular',
      percentage: 7,
      icon: 'angular'
    },

    {
      name: 'Typescript',
      percentage: 7,
      icon: 'typescript'
    },

    {
      name: 'Sass',
      percentage: 7,
      icon: 'sass'
    },

    {
      name: 'Github',
      percentage: 7,
      icon: 'github'
    },


  ]

  lessSkills = [
    {
      name: 'Illustrator',
      percentage: 6,
      icon: 'illustrator'
    },

    {
      name: 'Indesign',
      percentage: 5,
      icon: 'indesign'
    },

    {
      name: 'Vue.js',
      percentage: 6,
      icon: 'vue'
    },

    {
      name: 'Php',
      percentage: 6,
      icon: 'php'
    },

    {
      name: 'MySQL',
      percentage: 6,
      icon: 'mysql'
    },

    {
      name: 'Arduíno',
      percentage: 8,
      icon: 'arduino'
    },

    {
      name: 'Photoshop',
      percentage: 7,
      icon: 'photoshop'
    },

    {
      name: 'Svn',
      percentage: 7,
      icon: 'svn'
    },


  ]

  academicFormation = [
    {
      year: '2019 ~ ?',
      name: 'Formação Angular',
      organization: 'Alura',
      description: 'Aprenda as vantagens de um dos frameworks mais utilizados no mundo e requisitados no mercado!',
      icon: 'blackboard'
    },
    {
      year: '2015 ~ 2018',
      name: 'Design Digital',
      organization: 'Universidade Anhembi Morumbi',
      description: 'A Graduação em Design Digital da Anhembi Morumbi é um bacharelado pioneiro neste segmento, considerada uma referência nacional.',
      icon: 'hat'
    },
    {
      year: '2014 ~ 2015',
      name: 'Design Multimídia',
      organization: 'Obra Social Dom Bosco',
      description: 'Integração do Web Design (Atividade do Design voltado à projetos na internet), da Arquitetura da Informação, da Animação e da Manipulação de áudio e Vídeo.',
      icon: 'diploma'
    }  
  ]

  constructor() { }

  ngOnInit() {

  }

}
