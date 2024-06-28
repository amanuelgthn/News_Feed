import { ListingService } from './../listing.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

import { Article } from '../article';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <article>
    <img class='listing-photo' src="{{ this.article?.image_url }}" alt="">
  </article>
  <section class="listing description">
    <h2 class="listing-heading">{{ article?.title }}</h2>
    <p class="listing-location">{{ article?.summary}}</p>
  </section>
  <section class="listing-features">
    <ul>
      <li *ngIf="article?.url">
        <a [href]="article?.url" target="_blank">{{article?.url}}</a>
        <p>{{ articleContent }}</p>
      </li>
    </ul>
  </section>
  <section class="Back-Home">
    <a routerLink="">Back to Home</a>
  </section>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listingService = inject(ListingService);
  article: Article | undefined;
  articleContent: string | undefined;
  
  constructor() {
    const articlesId = Number(this.route.snapshot.params['id']);
    this.listingService.getArticleById(articlesId).then(article => {
      this.article = article;
      console.log(this.article);
    })
  }
  
  }
