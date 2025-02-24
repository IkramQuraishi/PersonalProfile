import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISkill } from '../../model/ISkill';
import { PortfolioService } from '../../service/Portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-skills',
  imports: [CommonModule],
  template: `
 <div class="card">
      <div class="card-header bg-success text-white">Professional Skills</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6" *ngFor="let skill of skills; let i = index">
            <p>{{ skill.name }}</p>
            <div class="progress">
              <div class="progress-bar bg-success" [style.width.%]="skill.percentage">{{ skill.percentage }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './ProfessionalSkills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalSkillsComponent implements OnInit {
  skills!: ISkill[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
  }
}