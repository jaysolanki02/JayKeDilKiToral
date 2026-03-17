import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { Hero } from './pages/hero/hero';

@Component({
  selector: 'app-root',
  imports: [
    Hero,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('jay-ke-dil-ki-toral');
  audioSrc = 'audio/Wedding_Piano_Music.mp3';
  isPlaying = false;
  isLoaded = false;

  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    this.isLoaded = false;
    setTimeout(() => {
     this.isLoaded = true; 
    });
  }
  toggleMusic() {
    const audio = this.bgMusic.nativeElement;

    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    this.isPlaying = !this.isPlaying;
  }
}
