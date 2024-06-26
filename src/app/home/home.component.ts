import { ListingService } from '../listing.service'
import { ArticlesComponent } from './../articles/articles.component';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Article } from '../article';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticlesComponent, CommonModule],
  template: `
  <section class="Search">
  <form class="nosubmit">
  <h1>Filter by keywords</h1>
  <input class="nosubmit" type="search" placeholder="The most successful IT companies in 2020">
</form>
  </section>
  <section class="results">
    <app-articles *ngFor="let articles of articleList" [articles]="articles"></app-articles>
  </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articleList: Article[] = [];
listingService: ListingService = inject(ListingService);

constructor() {
  this.articleList = this.listingService.getAllArticales();
}
}
