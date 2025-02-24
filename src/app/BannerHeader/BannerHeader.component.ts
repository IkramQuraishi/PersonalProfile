import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import { IPersonalInfo } from '../../model/IPersonalInfo';
import { ISocialIcon } from '../../model/ISocialIcon';
import { PortfolioService } from '../../service/Portfolio.service';
import { SocialMediaIconsComponent } from '../SocialMediaIcons/SocialMediaIcons.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner-header',
  imports: [CommonModule],
  template: `
  <div class="banner" [style.background-image]="'url(' + personalInfo.bgImage + ')'">
  <div class="overlay">
    <img [src]="personalInfo.profileImage" class="rounded-circle profile-pic" alt="Profile Picture">
    <h1>{{ personalInfo.name }}</h1>
    <p>{{ personalInfo.titles.join(', ') }}</p>
    <div class="btn-group">
      <a href="#hire" class="btn btn-success">Hire Me</a>
      <a href="path/to/cv.pdf" download class="btn btn-success">Download CV</a>
    </div>
    <!-- Social Media Icons Container -->
    <div class="social-icons">
      <a *ngFor="let icon of socialIcons" [href]="icon.url" target="_blank" class="social-icon">
        <i [class]="icon.iconClass"></i>
      </a>
    </div>
  </div>
</div>
  `,  
  styleUrl: './BannerHeader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerHeaderComponent implements OnInit {
  personalInfo: any;
  socialIcons: ISocialIcon[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioService.getPersonalInfo();
    this.socialIcons = this.portfolioService.getSocialIcons();
  }
}