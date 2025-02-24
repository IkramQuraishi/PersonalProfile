import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPortfolioItem } from '../../model/IPortfolioItem';
import { PortfolioService } from '../../service/Portfolio.service';

@Component({
  selector: 'app-portfolio-gallery',
  imports: [CommonModule],
  template: `
  <div class="card">
      <div class="card-header bg-success text-white">Portfolio</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6" *ngFor="let item of portfolioItems">
            <img [src]="item.imageUrl" class="img-fluid" alt="{{ item.caption }}">
            <p>{{ item.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './PortfolioGallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioGalleryComponent implements OnInit {
  portfolioItems!: IPortfolioItem[];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.portfolioItems = this.portfolioService.getPortfolioItems();
  }
}