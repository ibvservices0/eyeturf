import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ConnectivityService } from '../services/connectivity.service';
import { NoConnectivityDialog } from '../dialogs/no-connectivity-dialog';

@Component({
  selector: 'app-screen04',
  standalone: false,
  templateUrl: './screen04.html',
  styleUrl: './screen04.css',
})
export class Screen04 {

  constructor(
    private router: Router,
    private dialog: MatDialog
    // private connectivityService: ConnectivityService
  ) {}

  onSiguienteClick(): void {
    console.log('🔍 Botón Siguiente presionado en Screen04');
    
    const isConnected = navigator.onLine;
    console.log('📡 navigator.onLine:', isConnected);
    
    if (isConnected) {
      console.log('✅ Conectividad OK - Navegando a screen05');
      this.router.navigate(['/screen05']);
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
    this.router.navigate(['/screen03']);
  }
}
