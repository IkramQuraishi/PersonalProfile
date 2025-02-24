import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBasicInfo } from '../../model/IBasicInfo';
import { PortfolioService } from '../../service/Portfolio.service';

@Component({
  selector: 'app-basic-info',
  imports: [],
  template: `
  <div class="card">
      <div class="card-header bg-success text-white">Basic Information</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p>{{ basicInfo.bio }}</p>
          </div>
          <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item">Age: {{ basicInfo.age }}</li>
              <li class="list-group-item">Email: {{ basicInfo.email }}</li>
              <li class="list-group-item">Phone: {{ basicInfo.phone }}</li>
              <li class="list-group-item">Address: {{ basicInfo.address }}</li>
              <li class="list-group-item">Languages: {{ basicInfo.languages.join(', ') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './BasicInfo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInfoComponent implements OnInit {
  basicInfo!: IBasicInfo;
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit() {
    this.basicInfo = this.portfolioService.getBasicInfo();
  }
}