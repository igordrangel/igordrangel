'use client'

import { AnimatedText } from '@/components/AnimatedText'
import { FeaturedProject } from './FeaturedProject'
import { Project } from './Project'
import catUiImage from '../../../public/cat-ui.jpg'
import pocMessengerManagerImage from '../../../public/cat-ui-poc-messenger-manager.jpg'
import catUiCrudSample from '../../../public/cat-ui-guide-crud-app.jpg'
import koalaUiImage from '../../../public/koala-ui.jpg'
import koalaScrappingImage from '../../../public/koala-scrapping.jpg'
import koalaUtilsImage from '../../../public/koala-utils.jpg'
import rocketseatReactChallenge1 from '../../../public/desafio-rocketseat-01.jpg'
import rocketseatReactChallenge2 from '../../../public/desafio-rocketseat-02.jpg'

export default function Projets() {
  return (
    <main className="flex m-auto w-[75%] flex-col items-center justify-center pt-16 pb-32">
      <AnimatedText
        text="A imaginação supera o conhecimento!"
        className="mb-16"
      />

      <div className="grid grid-cols-12 gap-24 gap-y-32">
        <div className="col-span-12">
          <FeaturedProject
            title="CatUI"
            img={catUiImage}
            github="https://github.com/igordrangel/cat-ui"
            link="https://doc.catui.igordrangel.com.br"
            type="Em Destaque"
            summary="Cat UI é um Design System para projetos Angular, onde seu maior objetivo é abstrair ao máximo a criação de sistemas, permitindo mais produtividade."
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Messenger Manager"
            img={pocMessengerManagerImage}
            github="https://github.com/igordrangel/poc-app-mensageria-ui"
            link="https://poc-messenger-manager.igordrangel.com.br"
            type="Projeto"
            summary="Uma POC de uma aplicação de administração de processos de mensageria utilizando Angular e CatUI"
          />
        </div>
        <div className="col-span-6">
          <Project
            title="CatUI CRUD Sample"
            img={catUiCrudSample}
            github="https://github.com/igordrangel/cat-crud-example"
            link="https://doc.catui.igordrangel.com.br/guias/criando-uma-aplicacao-de-crud"
            type="Projeto"
            summary="Aplicação de exemplo de uma tela de CRUD utilizando Cat UI"
          />
        </div>

        <div className="col-span-12">
          <FeaturedProject
            title="KoalaUI"
            img={koalaUiImage}
            github="https://github.com/igordrangel/koala-angular-template"
            link="https://doc.koalaui.igordrangel.com.br"
            type="Em Destaque"
            summary="Cat UI é um Design System para projetos Angular, onde seu maior objetivo é abstrair ao máximo a criação de sistemas, permitindo mais produtividade."
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Koala Scrapping"
            img={koalaScrappingImage}
            github="https://github.com/igordrangel/koala-scrapping"
            link="https://www.npmjs.com/package/@koalarx/scrapping"
            type="Projeto"
            summary="Uma abstração utilizando Puppeteer para Web Scrapping."
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Koala Utils"
            img={koalaUtilsImage}
            github="https://github.com/igordrangel/koala-utils"
            link="https://www.npmjs.com/package/@koalarx/utils"
            type="Projeto"
            summary="Uma biblioteca para manimulação, transformação e requisição de dados."
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title="Desafio 02 React | Rocketseat"
            img={rocketseatReactChallenge2}
            github="https://github.com/igordrangel/desafio-02-react-rocketseat"
            link="https://www.npmjs.com/package/@koalarx/utils"
            type="Em Destaque"
            summary="Desafio 02 - Criando SPAs com ReactJS."
          />
        </div>
        <div className="col-span-6">
          <Project
            title="Desafio 01 React | Rocketseat"
            img={rocketseatReactChallenge1}
            github="https://github.com/igordrangel/desafio-01-react-rocketseat"
            link="https://github.com/igordrangel/desafio-01-react-rocketseat"
            type="Desafio"
            summary="Desafio 01 - Praticando os conceitos do ReactJS."
          />
        </div>
      </div>
    </main>
  )
}
