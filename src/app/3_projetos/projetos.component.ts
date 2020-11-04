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
      subtitle: 'Pacote utilitários TypeScript',
      img: {
        src: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        alt: 'Pacote utilitários TypeScript'
      },
      linkGitHub: 'https://github.com/igordrangel/koala-utils',
      linkNpm: 'https://www.npmjs.com/package/koala-utils'
    }];
  }
}
