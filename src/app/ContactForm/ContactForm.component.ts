import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBasicInfo } from '../../model/IBasicInfo';
import { PortfolioService } from '../../service/Portfolio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule,FormsModule],
  template: `
  <div class="contact-section">
  <div class="contact-overlay">
    <div class="container">
      <div class="row">
        <!-- Left Column: Form -->
        <div class="col-md-6">
          <form (ngSubmit)="onSubmit()">
            <h2>Contact Me</h2>
            <p>Feel free to contact me</p>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
              <input
                type="text"
                class="form-control"
                placeholder="Your name"
                [(ngModel)]="name"
                name="name"
                required
              >
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-file-alt"></i></span>
              <input
                type="text"
                class="form-control"
                placeholder="Subject"
                [(ngModel)]="subject"
                name="subject"
                required
              >
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              <input
                type="email"
                class="form-control"
                placeholder="Your email"
                [(ngModel)]="email"
                name="email"
                required
              >
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-comment"></i></span>
              <textarea
                class="form-control"
                placeholder="Type your message here"
                rows="4"
                [(ngModel)]="message"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">Send</button>
          </form>
        </div>
        <!-- Right Column: Contact Info -->
        <div class="col-md-6">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> {{ basicInfo.address }}</p>
            <p><strong>Phone:</strong> {{ basicInfo.phone }}</p>
            <p><strong>Email:</strong> {{ basicInfo.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  styleUrl: './ContactForm.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  basicInfo!: IBasicInfo;
  name: string = '';
  subject: string = '';
  email: string = '';
  message: string = '';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.basicInfo = this.portfolioService.getBasicInfo();
    let bgurl="assets/pics/bg_form.png";
  }

  onSubmit() {
    console.log('Form submitted:', {
      name: this.name,
      subject: this.subject,
      email: this.email,
      message: this.message
    });
    // Add actual submission logic (e.g., EmailJS or backend API) later
  }
}