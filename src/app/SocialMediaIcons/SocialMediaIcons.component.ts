import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { ISocialIcon } from '../../model/ISocialIcon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media-icons',
  imports: [CommonModule],
  template: `
  <div>
      <a *ngFor="let icon of icons" [href]="icon.url" target="_blank">
        <i class="fab fa-{{ icon.name }}"></i>
      </a>
    </div>
  `,
  styleUrl: './SocialMediaIcons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaIconsComponent { 
  @Input() icons: ISocialIcon[] = [];
}
