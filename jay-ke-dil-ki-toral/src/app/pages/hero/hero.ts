import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
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


  bgPosition = '';
  glImg = '/images/ganesha.png';
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
    // let margin = window.innerHeight;
    // let factor = window.innerHeight;
    // if(window.innerHeight < window.innerWidth) {
    //   factor = window.innerHeight / window.innerWidth;
    //   margin = window.innerWidth;
    // } else if(window.innerHeight = window.innerWidth) {
    //   margin = window.innerHeight;
    //   factor = 0.7;
    // } else {
    //   margin = window.innerHeight;
    //   factor = window.innerWidth / window.innerHeight;
    // }
    // this.hero.nativeElement.style.height =  + 'px';
    // this.handsTogether.nativeElement.style.height = margin * factor + 'px';
    // this.content.nativeElement.style.minWidth = (margin -5) + 'px';
    this.hero.nativeElement.style.height = this.hero.nativeElement.offsetWidth + 'px';
    this.handsTogether.nativeElement.style.height = this.handsTogether.nativeElement.offsetWidth/1.5 + 'px';
    // this.meetTheCouple.nativeElement.style.height = this.meetTheCouple.nativeElement.offsetWidth + 'px';
    this.meetTheBride.nativeElement.style.height = this.meetTheBride.nativeElement.offsetWidth/1.5 + 'px';
    this.meetTheGroom.nativeElement.style.height = this.meetTheGroom.nativeElement.offsetWidth/1.5 + 'px';
    
    this.content.nativeElement.style.minWidth = (this.hero.nativeElement.offsetWidth -5) + 'px';
    this.setbgPositionAndScroll();
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
    const factorScx = window.innerWidth < 768 ? 0.6 : 0.5;
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
