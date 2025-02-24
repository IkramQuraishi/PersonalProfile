import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISocialIcon } from '../../model/ISocialIcon';
import { PortfolioService } from '../../service/Portfolio.service';
import { SocialMediaIconsComponent } from '../SocialMediaIcons/SocialMediaIcons.component';

@Component({
  selector: 'app-footer',
  imports: [SocialMediaIconsComponent],
  template: `
  <footer class="bg-success text-white text-center py-3">
      <p>{{ name }}</p>
      <app-social-media-icons [icons]="socialIcons"></app-social-media-icons>
      <p>&copy; Creative CV. All rights reserved. Canada.</p>
    </footer>
  `,
  styleUrl: './Footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  name!: string;
  socialIcons!: ISocialIcon[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    const personalInfo = this.portfolioService.getPersonalInfo();
    this.name = personalInfo.name;
    this.socialIcons = this.portfolioService.getSocialIcons();
  }
}