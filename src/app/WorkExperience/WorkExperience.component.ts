import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IExperience } from '../../model/IExperience';
import { PortfolioService } from '../../service/Portfolio.service';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule],
  template: `
  <div class="card">
      <div class="card-header bg-success text-white">Work Experience</div>
      <div class="card-body">
        <div class="card mb-3" *ngFor="let exp of experiences">
          <div class="card-body">
            <h5 class="card-title">{{ exp.title }} at {{ exp.company }}</h5>
            <p class="card-text">{{ exp.duration }}</p>
            <p class="card-text">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './WorkExperience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent implements OnInit {
  experiences!: IExperience[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.experiences = this.portfolioService.getWorkExperiences();
  }
}
