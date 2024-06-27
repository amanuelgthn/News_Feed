import { Article } from './article';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  url = 'https://api.spaceflightnewsapi.net/v4/articles/'
  constructor() { }

async getAllArticles(): Promise<Article[]> {
  try {
    const response = await fetch(this.url);
    const data = await response.json();
    console.log(data.results);
    return data.results ?? [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

async getArticleById(id: Number): Promise<Article | undefined> {
  try {
    const response = await fetch(`${this.url}${id}`);
    console.log(`${this.url}/${id}`)
    const data = await response.json();
    console.log(data);
    return data ?? {};
  } catch (error) {
    console.error('Error fetching article:', error);
    return undefined;
  }
}
}