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
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    DecimalPipe,
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

  weddingDate = new Date('2026-05-01T00:00:00+05:30');
  countdown: any;

  ngOnInit() {
    this.setCountdown();
  }

  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  setCountdown() {
    setInterval(() => {
      const diff = this.weddingDate.getTime() - new Date().getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      this.countdown = {
        days,
        hours,
        minutes,
        seconds
      } 
    }, 1000);
  }
}
