import { Component, input } from "@angular/core";

type IconType =
  | 'angular'
  | 'bootstrap'
  | 'nestjs'
  | 'express'
  | 'fastify'
  | 'vitest'
  | 'jest'
  | 'prisma'
  | 'typeorm'
  | 'mysql'
  | 'postgresql'
  | 'puppeteer'
  | 'azureFunctions'
  | 'tailwind'

@Component({
  standalone: true,
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  icon = input.required<IconType>()
}
