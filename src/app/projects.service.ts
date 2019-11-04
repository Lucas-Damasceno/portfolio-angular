import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Array<ProjectObject> = [
    {
      name: 'Mamuth Mangueiras',
      imgLink: '/img/mamuth.jpg',
      description: 'Neste projeto fiquei encarregado de recriar o site da Mamuth, o site antigo era muito pesado, não amigavel ao mobile e estava tendo problemas com a hospedagem, o primeiro passo foi sair de uma hospedagem compartilhada e ir pra uma VPS, optei pela Linode em vez da Digital Ocean por já estar familiarizado, a plataforma escolhida foi o Wordpress, o site foi construido encima de um tema comprado na ThemeForest, também foi utilizado o plugin Polylang para adição de outros idiomas (Inglês e Espanhol).',
      roles: [],
      link: '',
      tools: [

      ]
    },
    {
      name: 'Cidadelas',
      imgLink: '/img/cidadelas.jpg',
      description: '',
      roles: [],
      link: '',
      tools: [

      ]
    },
    {
      name: 'Lista de Hoteis',
      imgLink: '/img/hoteis.jpg',
      description: '',
      roles: [],
      link: '',
      tools: [

      ]
    },
    {
      name: 'Kontrol Viagens',
      imgLink: '/img/kontrol_viagens.jpg',
      description: '',
      roles: [],
      link: '',
      tools: [

      ]
    },
    {
      name: 'Adventure Time!',
      imgLink: '/img/adventure_time.jpg',
      description: '',
      roles: [],
      link: '',
      tools: [

      ]
    },


  ]

  constructor() { }
}

export class ProjectObject {
    name;
    imgLink;
    description;
    roles;
    link;
    tools: Array<DevelopmentTools> = [
    ]
}

export class DevelopmentTools {
  name;
}
