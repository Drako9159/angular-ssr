import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ssr';
  constructor() {
    afterNextRender(() => {
      console.log(window.location.pathname);
    });
  }
}
