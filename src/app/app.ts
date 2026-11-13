import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SuDiMeComponent } from './components/su-di-me/su-di-me'; // <-- Import del nuovo componente
import { SkillsComponent } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SuDiMeComponent, SkillsComponent], // <-- Aggiunto negli imports
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'portfolio';
}