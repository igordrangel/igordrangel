import { Component } from "@angular/core";
import { DevEmTStacksInterface } from "../../../shared/dev-em-t/dev-em-t.component";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'idr-article-dev-em-t',
  templateUrl: 'article-dev-em-t.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleDevEmTComponent {
  public stacks: DevEmTStacksInterface[] = [{
    title: 'Web Scrapping',
    description: 'Node.js com Puppeteer'
  }, {
    title: 'Back-End',
    description: `
    <h3>Linguagens</h3>
    Node.js, PHP, MySQL
    <h3>Tecnologias/Ferramentas</h3>
    Express, TypeORM, Symfony, Doctrine`
  }, {
    title: 'Front-End',
    description: `
    <h3>Tecnologias</h3>
    Javascript, Typescript
    <h3>Frameworks</h3>
    Angular, Ionic, Electron, Koala UI,
    <h3>Bibliotecas</h3>
    Koala Utils, React (Nível Básico), Material Angular UI, Bootstrap, JQuery`
  }, {
    title: 'Devops',
    description: `
    <h3>VSC</h3>
    Git, HG Mercurial
    <h3>CI/CD</h3>
    GitHub Actions
    <h3>Cloud</h3>
    Azure Functions, Azure Storage Blob
    <h3>Mensageria</h3>
    RabbitMQ`
  }, {
    title: 'Soft Skills',
    description: `
    <h3>Desenvolvimento Pessoal</h3>
    Hábitos: da produtividade às metas pessoais
    <h3>Agil</h3>
    Scrum, Kamban`
  }]
}
