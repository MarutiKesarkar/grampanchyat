import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';
@Injectable({
  providedIn: 'root',
})
export class Confetti {
  fire(): void {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  fireCelebration(): void {
    const duration = 1500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 40,
        spread: 100,
        startVelocity: 30,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      });
    }, 250)
  }


}
