import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  // Impostiamo Windows 98 come predefinito
  currentTheme = 'theme-win98';

  ngOnInit() {
    // Se non c'è un tema salvato, usa 'theme-win98'
    const savedTheme = localStorage.getItem('portfolio_theme') || 'theme-win98';
    this.setThemeValue(savedTheme);
  }

  setTheme(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.setThemeValue(selectElement.value);
  }

  setThemeValue(themeName: string) {
    this.currentTheme = themeName;
    document.body.classList.remove('theme-dark', 'theme-win98', 'theme-macos', 'theme-material');
    document.body.classList.add(themeName);
    localStorage.setItem('portfolio_theme', themeName);
  }
}