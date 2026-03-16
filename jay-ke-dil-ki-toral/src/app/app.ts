import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './pages/hero/hero';
import { Bride } from './pages/bride/bride';
import { Groom } from './pages/groom/groom';
import { Story } from './pages/story/story';
import { Events } from './pages/events/events';
import { Gallery } from './pages/gallery/gallery';
import { Venue } from './pages/venue/venue';
import { Rsvp } from './pages/rsvp/rsvp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Hero,
    Bride,
    Groom,
    Story,
    Events,
    Gallery,
    Venue,
    Rsvp,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jay-ke-dil-ki-toral');



  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }


}
