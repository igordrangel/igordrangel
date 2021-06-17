import { Component } from "@angular/core";

@Component({
  selector: 'idr-article-introduction',
  templateUrl: 'article-introducao.component.html',
  styleUrls: ['../articles.component.css']
})
export class ArticleIntroducaoComponent {
  public redesSociais = [
    {
      link: 'https://api.whatsapp.com/send?phone=5522992083819',
      icon: 'whatsapp'
    },
    {
      link: 'https://www.youtube.com/channel/UCv_x0wptFjin5pbfRS7DoaQ',
      icon: 'fa-youtube'
    },
    {
      link: 'https://www.linkedin.com/in/igordrangel',
      icon: 'linked-in'
    },
    {
      link: 'https://github.com/igordrangel',
      icon: 'github'
    }
  ];
}
