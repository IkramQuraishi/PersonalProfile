import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IExperience } from '../../model/IExperience';
import { PortfolioService } from '../../service/Portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  template: `
  <div class="card">
      <div class="card-header bg-success text-white">Education</div>
      <div class="card-body">
        <div class="card mb-3" *ngFor="let edu of education">
          <div class="card-body">
            <h5 class="card-title">{{ edu.title }} at {{ edu.company }}</h5>
            <p class="card-text">{{ edu.duration }}</p>
            <p class="card-text">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './Education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit {
  education!: IExperience[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.education = this.portfolioService.getEducation();
  }
}