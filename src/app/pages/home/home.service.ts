import { Injectable } from "@angular/core";
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class HomeService {
  projects() {
    return of([
      {
        thumbnail: 'wallpapers/portifolio.jpg',
        title: 'Portifólio' ,
        description: 'Landing Page aprensentando minhas skills e projetos',
        actions: [
          {
            icon: 'fa-solid fa-arrow-up-right-from-square',
            label: 'Site',
            link: 'https://igordrangel.com.br',
            raisedButton: true
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/igordrangel',
            raisedButton: false
          }
        ]
      },
      {
        thumbnail: 'wallpapers/cat-ui.jpg',
        title: 'CatUI' ,
        description: 'Cat UI é um Design System para projetos Angular, onde seu maior objetivo é abstrair ao máximo a criação de sistemas, permitindo mais produtividade.',
        actions: [
          {
            icon: 'fa-solid fa-arrow-up-right-from-square',
            label: 'Documentação',
            link: 'https://doc.catui.igordrangel.com.br',
            raisedButton: true
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/cat-ui',
            raisedButton: false
          }
        ]
      },
      {
        thumbnail: 'wallpapers/cat-ui-poc-messenger-manager.jpg',
        title: 'Messenger Manager' ,
        description: 'Uma POC de uma aplicação de administração de processos de mensageria utilizando Angular e CatUI',
        actions: [
          {
            icon: 'fa-solid fa-arrow-up-right-from-square',
            label: 'Demonstração',
            link: 'https://poc-messenger-manager.igordrangel.com.br/',
            raisedButton: true
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/poc-app-mensageria-ui',
            raisedButton: false
          }
        ]
      },
      {
        thumbnail: 'wallpapers/koala-utils.jpg',
        title: 'Koala Utils' ,
        description: 'Uma biblioteca para manimulação, transformação e requisição de dados.',
        actions: [
          {
            icon: 'fa-brands fa-npm',
            link: 'https://www.npmjs.com/package/@koalarx/utils',
            raisedButton: false
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/koala-utils',
            raisedButton: false
          }
        ]
      }
    ])
  }

  expirience() {
    return of([
      {
        title: 'Auxiliar Administrativo',
        subtitle: '2016-2017 | Campos Dos Goytacazes/RJ, BR',
        description: 'Suporte ao Cliente e Controle e registro dos dados dos clientes em planilha excel',
        link: {
          label: '@Cia do Crédito',
          url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br'
        }
      },
      {
        title: 'Desenvolvedor WEB Júnior',
        subtitle: '2017-2018 | Campos Dos Goytacazes/RJ, BR',
        description: 'Desenvolvimento de aplicações internas da empresa',
        link: {
          label: '@Cia do Crédito',
          url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br'
        }
      },
      {
        title: 'Desenvolvedor WEB Pleno',
        subtitle: '2018-2019 | Campos Dos Goytacazes/RJ, BR',
        description: 'Desenvolvimento de aplicações internas e externas da empresa',
        link: {
          label: '@Cia do Crédito',
          url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br'
        }
      },
      {
        title: 'Desenvolvedor WEB Sênior/TL',
        subtitle: '2018-2020 | Campos Dos Goytacazes/RJ, BR',
        description: 'Desenvolvimento de aplicações internas e externas da empresa, aplicações de mensageria, webscrapping e liderança da equipe de desenvolvimento da empresa.',
        link: {
          label: '@Cia do Crédito',
          url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br'
        }
      },
      {
        title: 'Desenvolvedor WEB Sênior',
        subtitle: '2020-Atual | Rio De Janeiro, BR',
        description: 'Desenvolvimento de aplicações internas da Rede Globo(Cliente) e aplicações de mensageria.',
        link: {
          label: '@Meta',
          url: 'https://www.linkedin.com/company/metaoficial/mycompany/verification'
        }
      }
    ])
  }
}
