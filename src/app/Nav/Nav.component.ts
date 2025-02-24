import { ChangeDetectionStrategy, Component,HostListener,OnInit } from '@angular/core';
import { PortfolioService } from '../../service/Portfolio.service';
import { ISocialIcon } from '../../model/ISocialIcon'; 
import { SocialMediaIconsComponent } from '../SocialMediaIcons/SocialMediaIcons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  providers: [PortfolioService],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" [ngClass]="{'bg-success': isScrolled}">
      <div class="container">
        <a class="navbar-brand" href="#">Creative CV</a>
        <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed" 
                [attr.aria-expanded]="!isCollapsed" aria-controls="navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" [ngClass]="{'show': !isCollapsed}" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#info">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
            <li class="nav-item"><a class="nav-link" href="#references">References</a></li>
          </ul>
          <div class="d-flex align-items-center ms-2">
           
            <a href="path/to/cv.pdf" download class="btn btn-light ms-2">Download CV</a>
          </div>
        </div>
      </div>
    </nav>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  socialIcons!: ISocialIcon[];
  isCollapsed = true; // For mobile menu toggle
  isScrolled = false; // Track scroll state

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.socialIcons = this.portfolioService.getSocialIcons();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const bannerHeight = document.querySelector('app-banner-header')?.getBoundingClientRect().height || 500; // Default banner height
    this.isScrolled = window.scrollY > bannerHeight;
  }
}