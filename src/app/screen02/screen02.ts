import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ConnectivityService } from '../services/connectivity.service';
import { NoConnectivityDialog } from '../dialogs/no-connectivity-dialog';

@Component({
  selector: 'app-screen02',
  standalone: false,
  templateUrl: './screen02.html',
  styleUrl: './screen02.css',
})
export class Screen02 {

  constructor(
    private router: Router,
    private dialog: MatDialog
    // private connectivityService: ConnectivityService
  ) {}

  onSiguienteClick(): void {
    console.log('🔍 Botón Siguiente presionado en Screen02');
    
    const isConnected = navigator.onLine;
    console.log('📡 navigator.onLine:', isConnected);
    
    if (isConnected) {
      console.log('✅ Conectividad OK - Navegando a screen03');
      this.router.navigate(['/screen03']);
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
    this.router.navigate(['/screen01']);
  }
}
