import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ConnectivityService } from '../services/connectivity.service';
import { NoConnectivityDialog } from '../dialogs/no-connectivity-dialog';

@Component({
  selector: 'app-screen03',
  standalone: false,
  templateUrl: './screen03.html',
  styleUrl: './screen03.css',
})
export class Screen03 {

  constructor(
    private router: Router,
    private dialog: MatDialog
    // private connectivityService: ConnectivityService
  ) {}

  onSiguienteClick(): void {
    console.log('🔍 Botón Siguiente presionado en Screen03');
    
    const isConnected = navigator.onLine;
    console.log('📡 navigator.onLine:', isConnected);
    
    if (isConnected) {
      console.log('✅ Conectividad OK - Navegando a screen04');
      this.router.navigate(['/screen04']);
    } else {
      console.log('❌ Sin conectividad - Mostrando diálogo');
      this.dialog.open(NoConnectivityDialog, {
        width: '350px',
        panelClass: 'custom-dialog-container'
      });
    }
  }

  onAnteriorClick(): void {
    // El botón anterior no necesita verificación de conectividad
    this.router.navigate(['/screen02']);
  }
}
