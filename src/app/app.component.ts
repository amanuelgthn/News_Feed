import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
              <main>
                <header class="brand name">
                  <h1>Spaceflight News</h1>
                </header>
                <section class="content">
                  <router-outlet></router-outlet>
                </section>
              </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codebrige_test';
}
