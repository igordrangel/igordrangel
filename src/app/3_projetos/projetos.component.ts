import { Component, OnInit } from '@angular/core';
import { ProjetoInterface } from './projeto.interface';

@Component({
  selector: 'idr-projetos',
  templateUrl: 'projetos.component.html',
  styleUrls: ['projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  public projetos: ProjetoInterface[] = [];

  ngOnInit(): void {
    this.projetos = [{
      title: 'koala-utils',
      subtitle: 'npm i koala-utils',
      content: 'Pacote de utilitários TypeScript',
      img: {
        src: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        alt: 'Pacote de utilitários TypeScript'
      },
      linkGitHub: 'https://github.com/igordrangel/koala-utils',
      linkNpm: 'https://www.npmjs.com/package/koala-utils',
      linkYoutube: 'https://www.youtube.com/playlist?list=PLWTnDWtorUC3RTHtt99JdsYhq5tH2Z0LU'
    }, {
      title: 'ngx-koala',
      subtitle: 'npm i ngx-koala',
      content: 'Template Angular utilizando como base o Angular Material',
      img: {
        src: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        alt: 'Template Angular utilizando como base o Angular Material'
      },
      linkGitHub: 'https://github.com/igordrangel/koala-angular-template',
      linkNpm: 'https://www.npmjs.com/package/ngx-koala',
      linkSite: 'https://koalaui.igordrangel.com.br'
    }, {
      title: 'gambiel-doctrine',
      subtitle: 'composer require igordrangel/gambiel-doctrine',
      content: 'Pacote contendo abstrações na utilização do Doctrine',
      img: {
        src: 'https://icon-library.com/images/php-icon/php-icon-8.jpg',
        alt: 'Pacote contendo abstrações na utilização do Doctrine'
      },
      linkGitHub: 'https://github.com/igordrangel/gambiel-doctrine',
      linkPackagist: 'https://packagist.org/packages/igordrangel/gambiel-doctrine'
    }, {
      title: 'gambiel-helpers',
      subtitle: 'composer require igordrangel/gambiel-helpers',
      content: 'Pacote contendo helpers de validação e tramento de dados',
      img: {
        src: 'https://icon-library.com/images/php-icon/php-icon-8.jpg',
        alt: 'Pacote contendo helpers de validação e tramento de dados'
      },
      linkGitHub: 'https://github.com/igordrangel/gambiel-helpers',
      linkPackagist: 'https://packagist.org/packages/igordrangel/gambiel-helpers'
    }, {
      title: 'gambiel-response-query',
      subtitle: 'composer require igordrangel/gambiel',
      content: 'Pacote para filtro de dados em responses de requisições http (API)',
      img: {
        src: 'https://icon-library.com/images/php-icon/php-icon-8.jpg',
        alt: 'Pacote para filtro de dados em responses de requisições http (API)'
      },
      linkGitHub: 'https://github.com/igordrangel/gambiel-response-query',
      linkPackagist: 'https://packagist.org/packages/igordrangel/gambiel'
    }];
  }
}
