import { Injectable } from '@angular/core';
import { Project, SocialMedia } from './db.models';

@Injectable({ providedIn: 'root' })
export class DbService {
  get featuredSaas(): Project {
    return {
      thumbnail: '/assets/images/solicita-ai.jpg',
      label: 'Solicita.ai',
      description:
        'Plataforma inteligente de gestão de solicitações. Organiza, automatiza e simplifica o atendimento com fluxos personalizáveis, bases de conhecimento e agentes de IA integrados.',
      siteUrl: 'https://solicita-ai.com',
    };
  }

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
    return [
      ...this.mainProjects,
      {
        thumbnail:
          'https://opengraph.githubassets.com/1/igordrangel/desafio-01-react-rocketseat',
        label: 'Rocketseat — Desafio 01',
        description: 'Desafio 01 — Praticando os conceitos do ReactJS na trilha Ignite.',
        githubUrl: 'https://github.com/igordrangel/desafio-01-react-rocketseat',
      },
      {
        thumbnail:
          'https://opengraph.githubassets.com/1/igordrangel/desafio-02-react-rocketseat',
        label: 'Rocketseat — Desafio 02',
        description: 'Desafio 02 — Criando SPAs com ReactJS na trilha Ignite.',
        githubUrl: 'https://github.com/igordrangel/desafio-02-react-rocketseat',
      },
      {
        thumbnail: 'https://opengraph.githubassets.com/1/igordrangel/flappy-bird',
        label: 'Flappy Bird',
        description:
          'Recriação do clássico Flappy Bird em JavaScript, com física de voo, colisão e pontuação.',
        githubUrl: 'https://github.com/igordrangel/flappy-bird',
      },
      {
        thumbnail: 'https://opengraph.githubassets.com/1/igordrangel/local_streaming',
        label: 'Local Streaming',
        description:
          'Solução para transmissão e consumo de mídia em rede local, sem depender de serviços externos.',
        githubUrl: 'https://github.com/igordrangel/local_streaming',
      },
      {
        thumbnail: 'https://opengraph.githubassets.com/1/igordrangel/launch-countdown-timer',
        label: 'Launch Countdown',
        description:
          'Timer de contagem regressiva para lançamentos, com layout desafiador e foco em CSS.',
        githubUrl: 'https://github.com/igordrangel/launch-countdown-timer',
      },
    ];
  }

  get otherProjects(): Project[] {
    const mainLabels = new Set(this.mainProjects.map((project) => project.label));
    return this.projects.filter((project) => !mainLabels.has(project.label));
  }

  get socialMedias(): SocialMedia[] {
    return [
      { label: 'Github', url: 'https://github.com/igordrangel' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/igordrangel/' },
      { label: 'Youtube', url: 'https://www.youtube.com/@igord.rangel5958' },
    ];
  }
}
