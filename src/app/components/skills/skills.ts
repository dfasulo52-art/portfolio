import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string[];
  tags?: string[];
  isCurrent?: boolean;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  activeTab: 'esperienze' | 'formazione' = 'esperienze';

  experiences: TimelineItem[] = [
    {
      period: 'Set 2026 – Nov 2026',
      role: 'Tester & Controllo Qualità',
      company: 'Click and Carry (Ricondizionati)',
      location: 'Cardito (NA)',
      description: [
        'Diagnosi approfondita hardware e software su dispositivi elettronici ricondizionati.',
        'Esecuzione di test di qualità, collaudo funzionalità e ripristino operativo.',
        'Verifica degli standard di conformità prima della rimessa in commercio.'
      ],
      tags: ['QA Testing', 'Diagnostica HW/SW', 'Controllo Conformità']
    },
    {
      period: '2024 – Presente',
      role: 'Sviluppatore Web Freelance',
      company: 'Esercizi Commerciali Privati',
      description: [
        'Progettazione e realizzazione di applicativi e siti web su misura per attività locali.',
        'Integrazione di interfacce responsive (HTML5, CSS3, JavaScript) e gestione dati.'
      ],
      tags: ['Angular', 'Spring Boot', 'HTML5/CSS3', 'JavaScript', 'SQL'],
      isCurrent: true
    },
    {
      period: '2025 – 2026',
      role: 'Rider & Logistica Consegne',
      company: 'Pizzeria Cotto a Legna',
      location: 'Penta / Fisciano (SA)',
      description: [
        'Attività svolta parallelamente agli studi universitari a Fisciano.',
        'Gestione puntuale delle consegne, ottimizzazione dei percorsi e resistenza allo stress in fasce orarie di punta.'
      ],
      tags: ['Gestione del Tempo', 'Affidabilità', 'Problem Solving']
    },
    {
      period: 'Feb 2021 – Lug 2021',
      role: 'Tecnico Riparatore PC & Smartphone',
      company: 'Dottor Phone',
      location: 'Portici (NA)',
      description: [
        'Diagnosi e riparazione di componenti hardware, sostituzione display e batterie.',
        'Tecniche avanzate di saldatura su scheda madre e assistenza tecnica diretta al cliente.'
      ],
      tags: ['Microsaldatura', 'Riparazione Hardware', 'Assistenza Clienti']
    },
    {
      period: '2018 – 2019',
      role: 'Tecnico Riparatore PC & Smartphone (Autonomo)',
      company: 'Attività Indipendente',
      location: 'Portici (NA)',
      description: [
        'Riparazione hardware e software in autonomia su dispositivi mobili e computer.',
        'Risoluzione guasti, sostituzione componenti, formattazione e configurazione sistemi operativi.'
      ],
      tags: ['Hardware', 'Troubleshooting', 'Sistemi Operativi']
    },
    {
      period: 'Giu 2017 – Set 2017',
      role: 'Addetto Banco & Servizio Clienti',
      company: 'Gelateria Del Gallo',
      location: 'Portici (NA)',
      description: [
        'Prima esperienza lavorativa stagionale a contatto diretto con il pubblico.',
        'Lavoro in team, gestione rapida delle richieste e cura dell’ordine sul posto di lavoro.'
      ],
      tags: ['Team Working', 'Customer Care', 'Adattabilità']
    }
  ];

  education: TimelineItem[] = [
    {
      period: 'Nov 2026 – Presente',
      role: 'Corso Specialistico Test Automation (250 ore)',
      company: 'ITConsulting',
      location: 'Napoli / Centro Direzionale',
      description: [
        'Percorso intensivo focalizzato sull\'automazione dei test software e controllo qualità avanzato.',
        'Studio approfondito di Selenium WebDriver, framework TestNG e Playwright con Node.js.',
        'Gestione delle dipendenze con Maven/Gradle, configurazione di selettori avanzati (XPath e CSS) e sincronizzazione (Implicit/Explicit/Fluent Wait).'
      ],
      tags: ['Test Automation', 'Selenium', 'TestNG', 'Playwright', 'Maven'],
      isCurrent: true
    },
    {
      period: 'In Corso',
      role: 'Laurea Triennale in Informatica per le Aziende Digitali',
      company: 'Università Telematica Pegaso',
      description: [
        'Proseguimento del percorso accademico con focus mirato sui processi informatici applicati al contesto aziendale e digitale.'
      ],
      tags: ['Informatica', 'Aziende Digitali', 'Ingegneria del Software'],
      isCurrent: true
    },
    {
      period: 'Apr 2026 – Lug 2026',
      role: 'Corso Junior Java Developer (500 ore)',
      company: 'Generation Italy',
      description: [
        'Corso intensivo sulla programmazione ad oggetti con linguaggio Java e framework Spring.',
        'Approfondimento tecnologie Front-End (HTML, CSS, JavaScript) con utilizzo del framework Angular.'
      ],
      tags: ['Java OOP', 'Spring', 'Angular', 'SQL']
    },
    {
      period: '2020 (Interrotta)',
      role: 'Laurea Triennale in Informatica',
      company: 'Università degli Studi di Salerno (UniSA)',
      location: 'Fisciano (SA)',
      description: [
        'Acquisizione di una solida preparazione teorica, algoritmica e logica (148 CFU conseguiti su 180).'
      ],
      tags: ['Algoritmi', 'Strutture Dati', '148 CFU']
    },
    {
      period: 'Diploma — Voto: 99/100',
      role: 'Perito in Informatica e Telecomunicazioni',
      company: 'I.S. Francesco Saverio Nitti',
      location: 'Portici (NA)',
      description: [
        'Formazione tecnica approfondita su programmazione in C/C++, reti di calcolatori e sistemi operativi.'
      ],
      tags: ['C/C++', 'Reti', 'Sistemi Operativi', '99/100']
    }
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Sviluppo & Linguaggi',
      skills: ['Java (OOP)', 'C / C++ (Avanzato)', 'Python & Scripting', 'JavaScript / TypeScript', 'HTML5 & CSS3', 'SQL']
    },
    {
      title: 'Test Automation & QA',
      skills: ['Selenium WebDriver', 'TestNG Framework', 'Playwright', 'XPath & Advanced Selectors', 'Implicit/Explicit/Fluent Waits', 'Maven / Gradle']
    },
    {
      title: 'Framework & Backend',
      skills: ['Spring / Spring Boot', 'Angular', 'Node.js', 'REST API', 'Gestione Database']
    },
    {
      title: 'Sistemi Operativi & Reti',
      skills: ['Linux (Desktop & Server)', 'Windows & Windows Server', 'macOS', 'Reti di Calcolatori & Protocolli']
    },
    {
      title: 'Hardware & Strumenti',
      skills: ['Diagnosi HW/SW', 'Saldatura su Scheda Madre', 'Git & GitHub']
    }
  ];

  certifications = [
    {
      name: 'Certificazione Inglese Livello C1',
      issuer: 'Competenza linguistica avanzata (scritta e orale)',
      badge: 'C1'
    },
    {
      name: 'EIPASS 7 Moduli',
      issuer: 'Certificazione europea delle competenze digitali',
      badge: 'IT'
    }
  ];

  softSkills: string[] = [
    'Problem Solving',
    'Team Working',
    'Adattabilità & Flessibilità',
    'Resistenza allo Stress',
    'Pianificazione'
  ];

  setTab(tab: 'esperienze' | 'formazione') {
    this.activeTab = tab;
  }
}