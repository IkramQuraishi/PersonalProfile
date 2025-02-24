import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IReference } from '../../model/IReference';
import { PortfolioService } from '../../service/Portfolio.service';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  template: `
  <div class="card">
      <div class="card-header bg-success text-white">References</div>
      <div class="card-body">
        <div class="card mb-3" *ngFor="let ref of references">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img [src]="ref.imageUrl" class="card-img" alt="{{ ref.name }}" style="height: 8rem;Width:10rem;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ ref.name }}, {{ ref.title }}</h5>
                <p class="card-text">{{ ref.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './References.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent implements OnInit {
  references!: IReference[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.references = this.portfolioService.getReferences();
  }
}
