import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor() { }

  checkConnectivity(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      console.log('🔍 Checking connectivity...');
      
      // Verificar si navigator.onLine está disponible
      if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
        const isOnline = navigator.onLine;
        console.log('📡 navigator.onLine:', isOnline);
        
        if (!isOnline) {
          // Si navigator dice que está offline, respetamos eso
          console.log('❌ Navigator indicates offline');
          observer.next(false);
          observer.complete();
          return;
        }
      }

      // Si navigator dice online (o no está disponible), hacer verificación real
      this.verifyRealConnectivity().then(hasConnection => {
        console.log('✅ Real connectivity check result:', hasConnection);
        observer.next(hasConnection);
        observer.complete();
      }).catch((error) => {
        console.log('❌ Connectivity check failed:', error);
        observer.next(false);
        observer.complete();
      });
    });
  }

  private async verifyRealConnectivity(): Promise<boolean> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 segundos timeout

    try {
      console.log('🌐 Attempting connectivity verification...');
      
      // Intentar hacer una petición a un endpoint confiable
      const response = await fetch('https://www.google.com/favicon.ico?' + Date.now(), {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      console.log('✅ First connectivity test successful');
      return true;
    } catch (error) {
      clearTimeout(timeoutId);
      console.log('❌ First connectivity test failed:', error);
      
      // Segundo intento con otro endpoint
      const controller2 = new AbortController();
      const timeoutId2 = setTimeout(() => controller2.abort(), 3000);
      
      try {
        const response = await fetch('https://httpbin.org/status/200?' + Date.now(), {
          method: 'GET',
          cache: 'no-cache',
          signal: controller2.signal
        });
        
        clearTimeout(timeoutId2);
        console.log('✅ Second connectivity test successful');
        return true;
      } catch (error2) {
        clearTimeout(timeoutId2);
        console.log('❌ Second connectivity test failed:', error2);
        return false;
      }
    }
  }

  getConnectionType(): string {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        return connection.effectiveType || connection.type || 'unknown';
      }
    }
    return 'unknown';
  }
}