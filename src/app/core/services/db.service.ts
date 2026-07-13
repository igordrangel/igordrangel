import { Injectable } from '@angular/core';
import { Career, Project, Skill, SkillCategory, SocialMedia } from './db.models';

@Injectable({ providedIn: 'root' })
export class DbService {
  get featuredSaas(): Project {
    return {
      thumbnail: '/assets/images/ecossistema-koala.jpg',
      label: 'Ecossistema Koala',
      description:
        'O ecossistema Koala para aplicações Angular e NestJS. Componentes de UI, scaffolding de API e utilitários TypeScript pensados para produtividade e consistência — Koala UI, Koala Nest e Koala Utils.',
      siteUrl: 'https://koalarx.com',
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
        githubUrl: 'https://github.com/igordrangel/koala-ui',
        npmUrl: 'https://www.npmjs.com/package/@koalarx/ui',
      },
      {
        thumbnail: '/assets/images/koala-nest.jpg',
        label: 'Koala Nest',
        description:
          'A experiência shadcn/ui, feita nativamente para NestJS. Com DDD e TypeORM. Copie módulos para o seu repositório — sem dependências opacas.',
        docUrl: 'https://nest.koalarx.com',
        githubUrl: 'https://github.com/igordrangel/koala-nest',
      },
      {
        thumbnail: '/assets/images/koala-utils.jpg',
        label: 'Koala Utils',
        description:
          'Biblioteca utilitária para validações, conversões e abstrações de problemas comuns em JavaScript/TypeScript.',
        docUrl: 'https://utils.koalarx.com/',
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
        thumbnail: 'https://opengraph.githubassets.com/1/igordrangel/desafio-01-react-rocketseat',
        label: 'Rocketseat — Desafio 01',
        description: 'Desafio 01 — Praticando os conceitos do ReactJS na trilha Ignite.',
        siteUrl: 'https://desafio-01-react-rocketseat.vercel.app/',
        githubUrl: 'https://github.com/igordrangel/desafio-01-react-rocketseat',
      },
      {
        thumbnail: 'https://opengraph.githubassets.com/1/igordrangel/desafio-02-react-rocketseat',
        label: 'Rocketseat — Desafio 02',
        description: 'Desafio 02 — Criando SPAs com ReactJS na trilha Ignite.',
        siteUrl: 'https://desafio-02-react-rocketseat-5ihpjeuj7-igordrangel.vercel.app/',
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

  get mainSkills(): Skill[] {
    return [
      {
        label: 'Angular',
        description:
          'Minha especialidade — SPAs corporativas, PWAs, SSR, Signals e design systems. Criador do Koala UI; experiência de Angular 6 a 20+ em produção.',
        image: '/assets/images/skills/angular.svg',
        icon: 'fa-brands fa-angular',
        accent: 'angular',
        badge: 'Especialidade',
        highlight: true,
      },
      {
        label: 'Node.js',
        description: 'APIs, mensageria, automações e integrações com foco em escalabilidade.',
        image: '/assets/images/skills/nodejs.svg',
        icon: 'fa-brands fa-node-js',
        accent: 'node',
      },
      {
        label: 'TypeScript',
        description: 'Base de todos os projetos — tipagem forte do front ao back.',
        image: '/assets/images/skills/typescript.svg',
        icon: 'fa-brands fa-js',
        accent: 'typescript',
      },
      {
        label: 'NestJS',
        description: 'Backends com DDD, Prisma e abstrações do ecossistema Koala Nest.',
        image: '/assets/images/skills/nestjs.svg',
        icon: 'fa-brands fa-node-js',
        accent: 'nestjs',
      },
    ];
  }

  get skillCategories(): SkillCategory[] {
    return [
      {
        label: 'Frontend',
        description:
          'Especialista em Angular — interfaces modernas, acessíveis e responsivas. React apenas em estudos pontuais (Rocketseat), sem profundidade em produção.',
        skills: [
          { label: 'Angular Material' },
          { label: 'Tailwind CSS' },
          { label: 'Bootstrap' },
          { label: 'Ionic' },
          { label: 'PWA' },
          { label: 'Electron' },
        ],
      },
      {
        label: 'Backend',
        description: 'APIs, serviços, autenticação e documentação.',
        skills: [
          { label: 'NestJS' },
          { label: 'Express' },
          { label: 'Symfony' },
          { label: 'PHP' },
          { label: 'JWT' },
          { label: 'OpenID (SSO)' },
          { label: 'Swagger' },
          { label: 'Scalar' },
        ],
      },
      {
        label: 'Dados',
        skills: [
          { label: 'MySQL' },
          { label: 'PostgreSQL' },
          { label: 'Prisma' },
          { label: 'Doctrine' },
        ],
      },
      {
        label: 'Testes',
        skills: [{ label: 'Vitest' }, { label: 'Jest' }],
      },
      {
        label: 'Cloud & DevOps',
        description:
          'Versionamento, esteiras de CI/CD, containers e provedores cloud — atuação full-stack incluindo DevOps.',
        skills: [
          { label: 'Git' },
          { label: 'GitHub' },
          { label: 'GitLab' },
          { label: 'Bitbucket' },
          { label: 'GitHub Actions' },
          { label: 'CI/CD' },
          { label: 'Docker' },
          { label: 'Azure Functions' },
          { label: 'Azure Storage' },
          { label: 'GCP' },
          { label: 'GKE' },
        ],
      },
      {
        label: 'Automação',
        description: 'RPA, web scraping e automação de browser com Puppeteer (Koala Scrapping).',
        skills: [
          {
            label: 'Puppeteer',
            details:
              'RPA, web scraping e automação de browser. Ecossistema Koala Scrapping para extração de dados e fluxos repetitivos.',
          },
        ],
      },
    ];
  }

  get socialMedias(): SocialMedia[] {
    return [
      { label: 'Github', url: 'https://github.com/igordrangel' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/igordrangel/' },
      { label: 'Youtube', url: 'https://www.youtube.com/@igord.rangel5958' },
    ];
  }

  get career(): Career[] {
    return [
      {
        label: 'Auxiliar Administrativo',
        description:
          'Suporte ao Cliente e Controle e registro dos dados dos clientes em planilha excel.',
        url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br',
        startDate: new Date('2016-01-01'),
        endDate: new Date('2017-01-01'),
      },
      {
        label: 'Desenvolvedor I',
        description: 'Desenvolvimento de aplicações internas da empresa.',
        url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br',
        startDate: new Date('2017-01-01'),
        endDate: new Date('2018-01-01'),
        responsibilities: [
          'Sistematização/digitalização dos dados da empresa para melhoria da organização dos dados.',
          'Desenvolvimento de um sistema de atendimento interno para a empresa, além de outras funcionalidades visando a organização dos dados que antes estavam em planilhas excel.',
        ],
        challenges: [
          'Criar sistemas produtivos enquanto aprendia a programar.',
          'Durante minha evolução, retrabalhar partes que havia feito de forma mais amadora para algo melhor e mais sustentável.',
          'Lidar não só com desenvolvimento, mas também com DevOps e Infra (Segurança, performance, escalabilidade, etc).',
        ],
        learnings: [
          'Me desenvolvi como um programador recém saído do técnico em informática, onde aprendi a programar em PHP e MySQL.',
        ],
        technologies: [
          { label: 'PHP 5', details: 'Slim Framework' },
          { label: 'MySQL', details: 'PDO' },
          { label: 'HTML' },
          { label: 'CSS' },
          { label: 'JavaScript', details: 'jQuery' },
          { label: 'Git', details: 'Bitbucket' },
          { label: 'Servidor VPS', details: 'cPanel e WHM (Apache, MySQL, PHP, etc)' },
        ],
        company: 'Cia do Crédito',
        location: 'Campos dos Goytacazes, RJ (Presencial)',
      },
      {
        label: 'Desenvolvedor II',
        description: 'Desenvolvimento de aplicações internas da empresa.',
        url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br',
        startDate: new Date('2018-01-01'),
        endDate: new Date('2019-01-01'),
        responsibilities: [
          'Buscar oportunidades de automatização via sistema para aumentar a produtividade da empresa.',
          'Gerenciamento de uma equipe de desenvolvimento de 3 pessoas (contando comigo).',
        ],
        challenges: [
          'Aprender a comandar uma equipe de desenvolvimento enquanto ainda aprendia já estava em um nível pleno de desenvolvimento.',
          'Lidar não só com desenvolvimento, mas também com DevOps e Infra (Segurança, performance, escalabilidade, etc).',
        ],
        learnings: [
          'Aprender a trabalhar em equipe e a gerenciar uma equipe de desenvolvimento.',
          'Lidar com pressão e prazos de entrega de forma eficiente.',
        ],
        technologies: [
          { label: 'PHP 7', details: 'Symfony' },
          { label: 'MySQL', details: 'Doctrine' },
          { label: 'HTML' },
          { label: 'CSS' },
          { label: 'JavaScript', details: 'jQuery' },
          { label: 'Git', details: 'Bitbucket' },
          { label: 'Servidor VPS', details: 'cPanel e WHM (Apache, MySQL, PHP, etc)' },
        ],
        company: 'Cia do Crédito',
        location: 'Campos dos Goytacazes, RJ (Presencial)',
      },
      {
        label: 'Desenvolvedor III/Tech Lead',
        description:
          'Desenvolvimento de aplicações internas e externas da empresa, aplicações de mensageria, webscrapping e liderança da equipe de desenvolvimento da empresa.',
        url: 'https://www.linkedin.com/company/ciadocredito?originalSubdomain=br',
        startDate: new Date('2019-01-01'),
        endDate: new Date('2020-01-01'),
        responsibilities: [
          'Buscar oportunidades de automatização via sistema para aumentar a produtividade da empresa.',
          'Gerenciamento de uma equipe de desenvolvimento de 5 pessoas (contando comigo).',
          'Lidar não só com desenvolvimento, mas também com DevOps e Infra (Segurança, performance, escalabilidade, etc).',
        ],
        challenges: [
          'Aprender a organizar melhor as demandas com metodologias ágeis.',
          'Comandar mais pessoas que anteriormente.',
          'Desenvolver fluxos automatizados com RPA e Mensageria para coleta e inserção de dados em sistemas que não possuíam uma forma de integração direta.',
        ],
        learnings: [
          'Desempenhar um papel não só de operação (Desenvolvedor), mas também de gestor (Tech Lead) buscando sempre a melhoria contínua da equipe e das aplicações que desenvolvemos.',
          'Lidar com fluxos mais complexos de mensageria e RPA aliados a escalabilidade e performance.',
        ],
        technologies: [
          { label: 'PHP 7', details: 'Symfony' },
          { label: 'MySQL', details: 'Doctrine' },
          { label: 'Angular JS/6~10', details: 'Angular Material' },
          { label: 'Ionic 4' },
          { label: 'Electron' },
          { label: 'Puppeteer' },
          { label: 'Git', details: 'Bitbucket, Github' },
          { label: 'Servidor VPS', details: 'cPanel e WHM (Apache, MySQL, PHP, etc)' },
        ],
      },
      {
        label: 'Desenvolvedor II',
        description:
          'Desenvolvimento de aplicações internas da Rede Globo(Cliente) e aplicações de mensageria.',
        url: 'https://www.linkedin.com/company/metaoficial/mycompany/verification',
        startDate: new Date('2020-01-01'),
        endDate: new Date('2022-01-01'),
        responsibilities: [
          'Migração do sistema Globo PNE de Aspx para Angular 11 e implementação do OpenID',
          'Implementação do OpenID ao sistema Globo Integrador Contabil e transição do Angular 6 para o 12, realizando otimizações e refatoramentos visando clean code e performance.',
          'Implementações de aplicações de rotina, programadas e de mensageria utilizando Node.js',
        ],
        challenges: ['Lidar com uma empresa bem maior que a anterior'],
        learnings: [
          'Apesar de maior, demonstrou ser mais tranquilo de lidar pois estava em uma função mais focal, portanto, equipes mais bem estruturadas é possível alcançar mais com menos esforço.',
        ],
        technologies: [
          {
            label: 'Angular 11',
            details:
              'Angular Material, Bootstrap e Koala UI (Biblioteca Open Source desenvolvida por mim para a comunidade)',
          },
          { label: 'OpenID', details: 'SSO' },
          { label: 'Git', details: 'Gitlab' },
          { label: 'Node.js' },
          { label: 'Azure Functions', details: 'Cron Trigger e Queue Trigger' },
          { label: 'Azure Storage', details: 'Blob Storage' },
        ],
        company: 'Meta (Contratante) - Rede Globo (Cliente)',
        location: 'Remoto (Rio de Janeiro, RJ)',
      },
      {
        label: 'Desenvolvedor III',
        description:
          'Desenvolvimento de aplicações internas da Rede Globo(Cliente) e aplicações de mensageria.',
        url: 'https://www.linkedin.com/company/metaoficial/mycompany/verification',
        startDate: new Date('2022-01-01'),
        responsibilities: [
          'Desenvolvimento de um APP de Gestão de Seguros utilizando Angular 16 com integração direta ao Sharepoint.',
          'Reimplementação do APP Recibo Digital que utilizava Angular 14 e Ionic para Angular 18 e no formato de PWA buscando também boas práticas de clean code e abstração de código.',
          'Reimplementação do APP Admin do Recibo Digital que utilizava VUE.js para Angular 17 buscando também boas práticas de clean code e abstração de código.',
          'Atualizar o PNE para usar Angular 20+',
          'Atuar como full-stack na reformulação do sistema de Seguros para usar Angular 20+ e como o novo Koala UI que desenvolvi agora com um comportamento semelhante ao Shadcn/UI',
        ],
        challenges: ['Lidar com ramos de negócios que antes não tive contato, como o ramo Fiscal'],
        learnings: [
          'Aprender a lidar com ramos de negócios que antes não tive contato, como o ramo Fiscal',
        ],
        technologies: [
          {
            label: 'Angular 16+',
            details:
              'Angular Material, Bootstrap e Koala UI (Biblioteca Open Source desenvolvida por mim para a comunidade)',
          },
          { label: 'Sharepoint' },
          { label: 'GCP', details: 'Google Cloud Platform' },
          { label: 'GKE', details: 'Google Kubernetes Engine' },
          { label: 'Azure Functions', details: 'Cron Trigger e Queue Trigger' },
          { label: 'Azure Storage', details: 'Blob Storage' },
          {
            label: 'NestJS',
            details: 'Koala Nest (Biblioteca Open Source desenvolvida por mim para a comunidade)',
          },
          { label: 'MySQL', details: 'Prisma' },
          { label: 'Node.js' },
          { label: 'OpenID', details: 'SSO' },
          { label: 'Git', details: 'Gitlab' },
        ],
        company: 'Meta (Contratante) - Rede Globo (Cliente)',
        location: 'Remoto (Rio de Janeiro, RJ)',
      },
    ];
  }
}
