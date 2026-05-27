import { Injectable } from '@angular/core';
import { Project, SocialMedia } from './db.models';

@Injectable({ providedIn: 'root' })
export class DbService {
  get mainProjects(): Project[] {
    return [
      {
        thumbnail: '/assets/images/koala-ui.jpg',
        label: 'Koala UI',
        description:
          'A experiência do shadcn/ui, construída nativamente para Angular. Impulsionado por Signals e TailwindCSS v4. Compatível com SSR, pronto para funcionar sem zone.js. Sem complicações, apenas resultados.',
        docUrl: 'https://ui.koalarx.com',
        githubUrl: 'https://github.com/igordrangel/koala',
        npmUrl: 'https://www.npmjs.com/package/@koalarx/ui-cli',
      },
      {
        thumbnail: '/assets/images/koala-nest.jpg',
        label: 'Koala Nest',
        description:
          'Uma biblioteca robusta para desenvolvimento backend com NestJS, Domain-Driven Design e Prisma.',
        docUrl: 'https://nest.koalarx.com',
        githubUrl: 'https://github.com/igordrangel/koala-nest',
        npmUrl: '',
      },
      {
        thumbnail: '/assets/images/koala-utils.jpg',
        label: 'Koala Utils',
        description:
          'Biblioteca utilitária para validações, conversões e abstrações de problemas comuns em JavaScript/TypeScript.',
        githubUrl: 'https://github.com/igordrangel/koala-utils',
        npmUrl: 'https://www.npmjs.com/package/@koalarx/utils',
      },
      {
        thumbnail: '/assets/images/koala-scrapping.jpg',
        label: 'Koala Scrapping',
        description:
          'Uma poderosa biblioteca de abstração do Puppeteer para automação de navegadores e web scraping. Fornece uma API simplificada e intuitiva para interagir com páginas web, extrair dados e automatizar tarefas de RPA (Robotic Process Automation).',
        githubUrl: 'https://github.com/igordrangel/koala-scrapping',
        npmUrl: 'https://www.npmjs.com/package/@koalarx/scrapping',
      },
    ];
  }

  get projects(): Project[] {
    return [...this.mainProjects];
  }

  get socialMedias(): SocialMedia[] {
    return [
      { label: 'Github', url: 'https://github.com/igordrangel' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/igordrangel/' },
      { label: 'Youtube', url: 'https://www.youtube.com/@igord.rangel5958' },
    ];
  }
}
