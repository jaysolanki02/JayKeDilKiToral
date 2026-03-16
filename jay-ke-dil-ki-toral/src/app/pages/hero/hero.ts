import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  @ViewChild('hero') hero!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  @ViewChild('handsTogether') handsTogether!: ElementRef;
  // @ViewChild('meetTheCouple') meetTheCouple!: ElementRef;
  @ViewChild('meetTheBride') meetTheBride!: ElementRef;
  @ViewChild('meetTheGroom') meetTheGroom!: ElementRef;
  isparrallaxVisible = true;

  bgPosition = '';
  glImg = 'images/ganesha.png';
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateHeight(); 
    });
    this.setHeartbeatToFonts();

  }

  @HostListener('window:load')
  @HostListener('window:resize')
  @HostListener('document:DOMContentLoaded')
  @HostListener('window:orientationchange')
  @HostListener('window:scroll')
  updateHeight() {

    this.hero.nativeElement.style.height = this.hero.nativeElement.offsetWidth + 'px';
    this.handsTogether.nativeElement.style.height = this.handsTogether.nativeElement.offsetWidth/1.5 + 'px';
    this.meetTheBride.nativeElement.style.height = this.meetTheBride.nativeElement.offsetWidth/1.5 + 'px';
    this.meetTheGroom.nativeElement.style.height = this.meetTheGroom.nativeElement.offsetWidth/1.5 + 'px';
    
    this.content.nativeElement.style.minWidth = (this.hero.nativeElement.offsetWidth -5) + 'px';
    this.setbgPositionAndScroll();
    const rect = this.content.nativeElement.getBoundingClientRect();

    this.isparrallaxVisible =
      rect.top < window.innerHeight &&
      rect.bottom >= 0;

  }

  setHeartbeatToFonts() {
    setInterval(() => {
    const wedTitle = document.querySelector('.wed-title') as HTMLElement;
    let margin = window.innerHeight;
    let factor = window.innerHeight;
    if(window.innerHeight < window.innerWidth) {
      factor = window.innerHeight / window.innerWidth;
      margin = window.innerHeight;
    } else if(window.innerHeight = window.innerWidth) {
      margin = window.innerHeight;
      factor = 0.7;
    } else {
      factor = window.innerHeight / window.innerWidth;
      margin = window.innerHeight;
    }
      wedTitle.style.minHeight = factor * margin + 'px' ;
      if(wedTitle.style.fontSize === '5rem') {
        wedTitle.style.fontSize = '6rem';
      } else {
        wedTitle.style.fontSize = '5rem'
      }
    }, 1160);
  }

  setbgPositionAndScroll() {
    const scroll = window.scrollY;
    const factorScx = window.innerWidth < 768 ? 0.75 : 0.5;
    [
      document.querySelector('.root-landing-img') as HTMLElement,
      document.querySelector('.hands-together-img') as HTMLElement,
      document.querySelector('.meet-bride-img') as HTMLElement,
      document.querySelector('.meet-groom-img') as HTMLElement,
    ].forEach(bg=> {
      bg.style.transform = `translateY(${Math.floor(scroll * factorScx)}px)`;
    })
    setTimeout(() => {
      const gtlPO = document.querySelector('.gtl-po') as HTMLElement;
      gtlPO.style.marginTop = '0';
    }, 1000);

    // console.log(this.hero.nativeElement.getBoundingClientRect());
  }
  
}
