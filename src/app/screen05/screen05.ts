import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen05',
  standalone: false,
  templateUrl: './screen05.html',
  styleUrl: './screen05.css',
})
export class Screen05 {

  constructor(private router: Router) {}

  onAnteriorClick(): void {
    // El botón anterior no necesita verificación de conectividad
    this.router.navigate(['/screen04']);
  }
}
