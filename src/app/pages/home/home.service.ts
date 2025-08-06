import { Injectable } from "@angular/core";
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class HomeService {
  projects() {
    return of([
      {
        thumbnail: 'wallpapers/portifolio.jpg',
        title: 'Portifólio',
        description: 'Landing Page aprensentando minhas skills e projetos',
        actions: [
          {
            icon: 'fa-solid fa-arrow-up-right-from-square',
            label: 'Site',
            alt: 'Link para meu portifólio',
            link: 'https://igordrangel.com.br',
            raisedButton: true,
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/igordrangel',
            alt: 'Link para o Github do meu portifólio',
            raisedButton: false,
          },
        ],
      },
      {
        thumbnail: 'wallpapers/koala-ui.jpg',
        title: 'KoalaUI',
        description:
          'Koala UI é uma biblioteca de componentes moderna e acessível projetada para acelerar o desenvolvimento de interfaces em projetos Angular. Com integração simples e documentação clara, você pode facilmente construir aplicações robustas e visualmente atraentes.',
        actions: [
          {
            icon: 'fa-solid fa-arrow-up-right-from-square',
            label: 'Documentação',
            alt: 'Link para a Documentação do KoalaUI',
            link: 'https://ui.koalarx.com',
            raisedButton: true,
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/koala-ui',
            alt: 'Link para o GitHub do KoalaUI',
            raisedButton: false,
          },
        ],
      },
      {
        thumbnail: 'wallpapers/koala-utils.jpg',
        title: 'Koala Utils',
        description:
          'Uma biblioteca para manimulação, transformação e requisição de dados.',
        actions: [
          {
            icon: 'fa-brands fa-npm',
            link: 'https://www.npmjs.com/package/@koalarx/utils',
            alt: 'Link para o NPM da biblioteca @koalarx/utils',
            raisedButton: false,
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/koala-utils',
            alt: 'Link para o GitHub da biblioteca @koalarx/utils',
            raisedButton: false,
          },
        ],
      },
      {
        thumbnail: 'wallpapers/koala-nest.jpg',
        title: 'Koala Nest',
        description:
          'Uma biblioteca para aplicações NestJS utilizando o padrão DDD.',
        actions: [
          {
            icon: 'fa-brands fa-npm',
            link: 'https://www.npmjs.com/package/@koalarx/nest',
            alt: 'Link para o NPM da biblioteca @koalarx/nest',
            raisedButton: false,
          },
          {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/igordrangel/koala-nest',
            alt: 'Link para o GitHub da biblioteca @koalarx/nest',
            raisedButton: false,
          },
        ],
      },
    ]);
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
