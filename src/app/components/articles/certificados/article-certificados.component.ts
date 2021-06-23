import { Component } from "@angular/core";
import { CardsInterface } from "../../../shared/components/cards/cards.component";

@Component({
  selector: 'idr-article-certificados',
  templateUrl: 'article-certificados.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleCertificadosComponent {
  public certificados: CardsInterface[] = [{
    title: 'ANGULAR',
    link: 'https://cursos.alura.com.br/degree/certificate/a9fb6ac8-b484-4962-854e-8beee8c837af',
    thumbnail: './assets/certificado-angular.jpg'
  },{
    title: 'SCRUM: AGILIDADE EM SEU PROJETO',
    link: 'https://cursos.alura.com.br/certificate/3aeecea6-b3dc-4818-b301-89f9342ff6ad',
    thumbnail: './assets/certificado-scrum.jpg'
  },{
    title: 'VETORES E ANIMAÇÃO COM SVG: TRABALHANDO COM CSS E JAVASCRIPT',
    link: 'https://cursos.alura.com.br/certificate/87dc2ece-b2e2-41a5-a31c-f58ef41bdc78',
    thumbnail: './assets/certificado-vetores-animacoes-svg.jpg'
  },{
    title: 'REACT: FUNCTION COMPONENTS, UMA ABORDAGEM MODERNA',
    link: 'https://cursos.alura.com.br/certificate/1001045a-1aa6-473f-9f5a-36bdb3561fc8',
    thumbnail: './assets/certificado-react.jpg'
  },{
    title: 'REST COM NODEJS: API COM EXPRESS E MYSQL',
    link: 'https://cursos.alura.com.br/certificate/8b5f469f-b4d0-4e14-999b-842ccc1df20c',
    thumbnail: './assets/certificado-nodejs.jpg'
  },{
    title: 'Inglês - Nível A1',
    link: 'https://api.busuu.com/anon/certificates/bb9fa042436f3e4213b675270c369512',
    thumbnail: './assets/certificado-ingles-a1.jpg'
  }];
}
