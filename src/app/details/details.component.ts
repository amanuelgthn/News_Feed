import { ListingService } from './../listing.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  template: `
  <article>
    <img class='listing-photo' src="{{ article?.image_url }}" alt="">
  </article>
  <section class="listing description">
    <h2 class="listing-heading">{{ article?.title }}</h2>
    <p class="listing-location">{{ article?.summary}}</p>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">About this location</h2>
    <ul>
      <li>{{article?.url}}</li>
    </ul>
  </section>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listingService = inject(ListingService);
  article: Article | undefined;
  
  constructor() {
    const articlesId = Number(this.route.snapshot.params['id']);
    this.article = this.listingService.getArticleById(articlesId);
    }
  }
