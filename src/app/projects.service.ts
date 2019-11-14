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
      roles: [
        'User Interface (UI)',
        'Configuração do Servidor',
        'Back-End',
        'Front-End'
      ],
      link: 'mamuth-mangueiras',
      tools: [
        'illustrator',
        'photoshop',
        'wordpress',
        'html5',
        'css3',
        'javascript'
      ],
      imgs: [
        'one.png',
        'two.png'
      ]
    },
    {
      name: 'Cidadelas',
      cardName: 'cidadelas',
      description: 'O projeto Cidadelas foi o trabalho de conclusão de curso do meu Bacharelado em Design Digital, nós integrantes do grupo passamos 6 meses fazendo uma pesquisa sobre o assédio sexual no Brasil, com os dados levantados nessa pesquisa foi feito o App Cidadelas, cujo objetivo seria ser uma ferramenta para ajudar mulheres em casos de assédio e cartografar as áreas de risco. <br>' +
      'O aplicativo foi feito utilizando Vue.js, Cordova, e no Back-end foi utilizado PHP. <br>' +  
      'Foi necessário a programação de um pequeno embarcado que servisse como um botão de pânico, o microcontrolador escolhido foi o ESP32 e a comunicação com o celular foi feita via bluetooth.',
      roles: [
        'Configuração do servidor',
        'Back-End Parcialmente',
        'Front-End Parcialmente',
        'Transformação em um SPA utilizando Vue.js',
        'Programação do embarcado e construção interna',
        'Integração embarcado / dispositivo'
      ],
      link: 'cidadelas',
      tools: [
        'illustrator',
        'photoshop',
        'after-effects',
        'indesign',
        'vue',
        'php',
        'html5',
        'css3',
        'javascript',
        'linux',
        'arduino'
      ],
      imgs: [
        '1e2.png',
        '3.gif',
        '5.gif',
        '7e8e9.png',
        '10.png'
      ]
    },
    {
      name: 'Lista de Hoteis',
      cardName: 'lista_hoteis',
      description: '',
      roles: [
        'Front-End',
        'Adaptação do layout para Mobile'
      ],
      link: 'hotel_list',
      tools: [
        'photoshop',
        'angular',
        'postman',
        'html5',
        'css3',
        'sass',
        'javascript'
      ],
      imgs: [
        'one.png',
        'two.png',
        'three.png'
      ]
    },
    {
      name: 'Kontrol Viagens',
      cardName: 'kontrol_viagens',
      description: 'O Kontrol Viagens é parametrizado para operações em B2B e B2C, integrado a todos os GDSs, a mais de 200.000 hotéis e aos principais provedores de Autos e Seguros de viagem.',
      roles: [
        'Correção de bugs',
        'Implementação de novas funcionalidades',
        'Refatoração de Código',
        'Adaptação para o layout Mobile',
        'Atualização de layout'
      ],
      link: 'kontrol_viagens',
      tools: [
        'angular',
        'postman',
        'html5',
        'css3',
        'sass',
        'javascript'
      ],
      imgs: [
        'one.jpg',
        'two.jpg',
        'three.jpg'
      ]
    },
    {
      name: 'Adventure Time!',
      cardName: 'adventure_time',
      description: 'Diagramação de uma matéria para uma revista digital, o tema foi o encerramento de Hora de Aventura em seu oitavo ano, o modelo utilizado para o desenho do Finn foi um StoryBoard Oficial.',
      roles: [
        'illustração',
        'diagramação'
      ],
      link: 'adventure-time',
      tools: [
        'illustrator',
        'indesign',
        'photoshop'
      ],
      imgs: [
        'one.jpg',
        'two.jpg',
        'three.jpg'
      ]
    },
    {
      name: 'Legion!',
      cardName: 'card-legion',
      description: 'Exercicío de Diagramação criando uma pequena revista sobre a direção de Arte da Série LEGION da FX.',
      roles: [
        'diagramação',
        'texto'
      ],
      link: 'legion',
      tools: [
        'illustrator',
        'indesign',
        'photoshop'
      ],
      imgs: [
        'one.jpg',
        'two.jpg',
        'three.jpg',
        'four.jpg'
      ]
    },
    {
      name: 'Admin - Kontrol',
      cardName: 'admin',
      description: '',
      roles: [
        'Refatoração de código',
        'Implementação de novas funcionalidades',
        'Atualização de layout'
      ],
      link: 'admin-kontrol',
      tools: [
        'angular',
        'postman',
        'html5',
        'css3',
        'sass',
        'javascript'
      ],
      imgs: [
        'one.jpg',
        'two.jpg'
      ]
    },
    {
      name: 'Pantera!',
      cardName: 'pantera',
      description: 'Nesse cartaz quis testar algumas técnicas e fugir do padrão hollywoodiano de cartazes, o objetivo era trazer um pouco mais da África, isso pode ser visto pela escolha das Fontes e pelo Pattern tipicamente africano utilizado no fundo.',
      roles: [
        'Editor',
        'Diagramação',
      ],
      link: 'pantera',
      tools: [
        'photoshop'
      ],
      imgs: [
        'one.jpg',
        'two.jpg'
      ]
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
    tools = [
    ];
    imgs: any = []
}