import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Nav/Nav.component';
import { BannerHeaderComponent } from './BannerHeader/BannerHeader.component';
import { ProfessionalSkillsComponent } from './ProfessionalSkills/ProfessionalSkills.component';
import { PortfolioGalleryComponent } from './PortfolioGallery/PortfolioGallery.component';
import { WorkExperienceComponent } from './WorkExperience/WorkExperience.component';
import { EducationComponent } from './Education/Education.component';
import { ReferencesComponent } from './References/References.component';
import { FooterComponent } from './Footer/Footer.component';
import { BasicInfoComponent } from './BasicInfo/BasicInfo.component';
import { ContactFormComponent } from './ContactForm/ContactForm.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavComponent,
    BannerHeaderComponent,
    ProfessionalSkillsComponent,
    PortfolioGalleryComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    FooterComponent,
    BasicInfoComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PersonalPortfolio';
}
