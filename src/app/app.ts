import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Confetti } from './confetti';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // protected readonly title = signal('Gram');
 private confettiService = inject(Confetti);

 ngOnInit(): void {
  const hasVisited = localStorage.getItem('first_visit_done');

  if(!hasVisited){
    setTimeout(() => {
      this.confettiService.fireCelebration();
    }, 500);

    localStorage.setItem('first_visit_done', 'true');
  }
 }
}
