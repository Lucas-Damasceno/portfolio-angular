import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Array<ProjectObject> = [
    {
      name: 'Mamuth Mangueiras',
      cardName: 'mamuth',
      description: 'Neste projeto fiquei encarregado de recriar o site da Mamuth, o site antigo era muito pesado, não amigavel ao mobile e estava tendo problemas com a hospedagem, o primeiro passo foi sair de uma hospedagem compartilhada e ir pra uma VPS, optei pela Linode em vez da Digital Ocean por já estar familiarizado, a plataforma escolhida foi o Wordpress, o site foi construido encima de um tema comprado na ThemeForest, também foi utilizado o plugin Polylang para adição de outros idiomas (Inglês e Espanhol).',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Cidadelas',
      cardName: 'cidadelas',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Lista de Hoteis',
      cardName: 'lista_hoteis',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Kontrol Viagens',
      cardName: 'kontrol_viagens',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Adventure Time!',
      cardName: 'adventure_time',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Legion!',
      cardName: 'card-legion',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Vetorização!',
      cardName: 'card-painel1',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },
    {
      name: 'Pantera!',
      cardName: 'pantera',
      description: '',
      roles: [],
      link: '',
      tools: [

      ],
      imgs: []
    },




  ]

  constructor() { }
}

export class ProjectObject {
    name;
    cardName;
    description;
    roles;
    link;
    tools: Array<DevelopmentTools> = [
    ];
    imgs: []
}

export class DevelopmentTools {
  name;
}
