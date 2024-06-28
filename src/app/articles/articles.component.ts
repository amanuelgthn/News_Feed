import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="articles.image_url" alt="Image of 
      {{ articles.title }} " width="400" height="217">
      <p class="article-date">{{ articles.updated_at | date:'MMMM d, y HH:mm' }}</p>
      <h1 class="listing-header">{{ articles.title }}</h1>
      <p class="listing-location">{{ articles.summary }}</p>
      <a class="article-more" [routerLink]="['/details', articles.id]">Read More→</a>
    </section>
  `,
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  @Input() articles!: Article;
}
