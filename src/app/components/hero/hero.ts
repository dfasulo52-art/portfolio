import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  isModalOpen = false;

  openContactModal() {
    this.isModalOpen = true;
  }

  closeContactModal() {
    this.isModalOpen = false;
  }

  getMailLink(): string {
    const email = 'dfasulo52@gmail.com';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      return `googlegmail://co?to=${email}`;
    } else {
      return `mailto:${email}`;
    }
  }
}