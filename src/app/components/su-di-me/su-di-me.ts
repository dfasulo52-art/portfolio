import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- FONDAMENTALE per *ngFor, *ngIf e [ngClass]

@Component({
  selector: 'app-su-di-me',
  standalone: true,
  imports: [CommonModule], // <-- Assicurati che sia qui dentro
  templateUrl: './su-di-me.html',
  styleUrls: ['./su-di-me.css']
})
export class SuDiMeComponent {
  
  // Variabile che tiene traccia della scheda attiva
  activeTab: string = 'passioni';

  // Array con i dati delle passioni
  passions = [
    {
      id: 'scienza',
      title: 'Scienza & Curiosità',
      icon: 'fa-solid fa-microscope',
      description: 'Amo la tecnologia e la scienza a 360 gradi. Mi tengo costantemente aggiornato sulle nuove uscite tech, subisco il fascino della chimica e trovo grande energia nella natura e nella musica.'
    },
    {
      id: 'retrogaming',
      title: 'retrogaming & Console Repair',
      icon: 'fa-solid fa-gamepad',
      description: 'Fan sfegatato del mondo Nintendo e dei Pokémon. Non mi limito a collezionare e giocare: con tanta pazienza e precisione, ripariamo console d’epoca direttamente sul banco di lavoro per conservarle come pezzi unici.'
    },
    {
      id: 'meccanica',
      title: 'Meccanica & Go-Kart',
      icon: 'fa-solid fa-gears',
      description: 'Appassionato di auto e di meccanica pura. Prvo un brivido ogni volta che vedo un motore o un cambio smontato, uno dei miei obiettivi è costruire un piccolo kart 2 tempi, la manualità e la perseveranza non mancano mai.'
    },
    {
      id: 'passioni',
      title: 'Avventura & Passioni',
      icon: 'fa-solid fa-compass',
      description: 'Spirito d’avventura tra una sessione di pesca in mare (dove la pazienza è tutto) e i fornelli in cucina. Nel tempo libero mi dedico anche all’acquariologia e alla ricerca di capi di moda d’archivio.'
    }
  ];

  // Funzione che viene eseguita al click sul bottone
  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }
}