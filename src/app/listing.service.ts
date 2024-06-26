import { Article } from './article';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  protected articleList: Article[] = [
    {
      "id": 1299,
      "title": "Mars rovers, helicopters, and sunsets",
      "url": "https://www.planetary.org/the-downlink/mars-rovers-helicopters-and-sunsets",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_2400x811_crop_center-center_82_line/760035/mars-crater-birds-eye-utopia.jpg",
      "news_site": "Planetary Society",
      "summary": "This week brings updates on the next missions to rove — and maybe even fly — over the surface of Mars.",
      "published_at": "2024-05-24T14:38:57Z",
      "updated_at": "2024-05-24T14:38:57.958530Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1298,
      "title": "Earth’s quasi-moons, minimoons, and ghost moons",
      "url": "https://www.planetary.org/articles/the-quasi-moons-of-earth",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x703_crop_center-center_82_line/quasi-moon-orbit.jpg",
      "news_site": "Planetary Society",
      "summary": "They may not be real moons, but they're worth exploring and studying.",
      "published_at": "2024-05-21T16:38:59Z",
      "updated_at": "2024-05-22T16:38:59.689966Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1297,
      "title": "Weekly Roundup for SpacePolicyOnline.com: May 6-19, 2024",
      "url": "https://spacepolicyonline.com/news/weekly-roundup-for-spacepolicyonline-com-may-6-19-2024/",
      "image_url": "https://pbs.twimg.com/profile_images/548027983/Website_logo_400x400.jpg",
      "news_site": "SpacePolicyOnline.com",
      "summary": "Here are links to all the articles published on SpacePolicyOnline.com over the past two weeks, May 5-19, 2024, including our “What’s Happening in Space Policy” for this coming week. Click […]",
      "published_at": "2024-05-20T10:53:36Z",
      "updated_at": "2024-05-20T10:59:14.882025Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1296,
      "title": "A certain flair for solar activity",
      "url": "https://www.planetary.org/the-downlink/a-certain-flair-for-solar-activity",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_2400x1800_crop_center-center_82_line/Gene-lewan-aurora.jpg",
      "news_site": "Planetary Society",
      "summary": "The Sun was in the spotlight this week, with a huge solar storm and the biggest solar flare in over a decade.",
      "published_at": "2024-05-17T14:38:57Z",
      "updated_at": "2024-05-17T14:38:58.024103Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1295,
      "title": "What is the Outer Space Treaty?",
      "url": "https://www.planetary.org/articles/what-is-the-outer-space-treaty",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg",
      "news_site": "Planetary Society",
      "summary": "An overview of one of international space law’s foundational documents.",
      "published_at": "2024-05-14T14:02:04Z",
      "updated_at": "2024-05-14T14:02:04.402665Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1294,
      "title": "Can you imagine?",
      "url": "https://www.planetary.org/the-downlink/can-you-imagine",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x1117_crop_center-center_82_line/jupiter-in-infrared-from-gemini.jpg",
      "news_site": "Planetary Society",
      "summary": "From visionary technologies to unusual planetary views, this week’s Downlink will challenge your imagination.",
      "published_at": "2024-05-10T14:32:04Z",
      "updated_at": "2024-05-10T14:32:04.956272Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1293,
      "title": "Meet the Habitable Worlds Observatory, NASA’s life-seeking telescope",
      "url": "https://www.planetary.org/articles/meet-habitable-worlds-observatory",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg",
      "news_site": "Planetary Society",
      "summary": "The observatory will directly image Earth-size exoplanets circling other stars.",
      "published_at": "2024-05-06T14:03:33Z",
      "updated_at": "2024-05-06T14:03:33.234439Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1292,
      "title": "Weekly Roundup for SpacePolicyOnline.com: April 29-May 5, 2024",
      "url": "https://spacepolicyonline.com/news/weekly-roundup-for-spacepolicyonline-com-april-29-may-5-2024/",
      "image_url": "https://pbs.twimg.com/profile_images/548027983/Website_logo_400x400.jpg",
      "news_site": "SpacePolicyOnline.com",
      "summary": "Here are links to all the articles published on SpacePolicyOnline.com over the last week, April 29-May 5, 2024, including our “What’s Happening in Space Policy” for this coming week. Click […]",
      "published_at": "2024-05-06T11:45:21Z",
      "updated_at": "2024-05-06T11:53:47.912786Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1291,
      "title": "Wow! But also, yikes!",
      "url": "https://www.planetary.org/the-downlink/wow-but-also-yikes",
      "image_url": "https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_2400x1600_crop_center-center_82_line/total-solar-eclipse-2024-seen-from-ISS.jpg",
      "news_site": "Planetary Society",
      "summary": "Photos and news from space to inspire, amaze, and even scare you a little.",
      "published_at": "2024-05-03T14:33:34Z",
      "updated_at": "2024-05-03T14:33:34.174617Z",
      "featured": false,
      "launches": [],
      "events": []
  },
  {
      "id": 1290,
      "title": "CFT: Meet the astronauts",
      "url": "https://blog.ulalaunch.com/blog/cft-meet-the-astronauts",
      "image_url": "https://blog.ulalaunch.com/hubfs/CFT_crewportrait.jpg",
      "news_site": "United Launch Alliance",
      "summary": "",
      "published_at": "2024-05-03T12:43:44Z",
      "updated_at": "2024-05-03T12:43:44.086751Z",
      "featured": false,
      "launches": [],
      "events": []
  }
  ];
  constructor() { }

  getAllArticales(): Article[] {
    return this.articleList;
  }

getArticleById(id: Number): Article | undefined {
  return this.articleList.find(article => article.id === id);
}
}