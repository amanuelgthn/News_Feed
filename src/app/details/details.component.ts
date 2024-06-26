import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { Article } from '../article';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  template: `
    <p>
      details works! {{ articlesId}}
    </p>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listingService = inject(ListingService);
  articlesId = 0;
  
  constructor() {
    this.articlesId = Number(this.route.snapshot.params['id']);
    }
  }
