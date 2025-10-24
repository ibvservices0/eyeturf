import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Screen01 } from './screen01/screen01';
import { Screen02 } from './screen02/screen02';
import { Screen03 } from './screen03/screen03';
import { Screen04 } from './screen04/screen04';
import { Screen05 } from './screen05/screen05';
import { NoConnectivityDialog } from './dialogs/no-connectivity-dialog';
// import { ConnectivityService } from './services/connectivity.service';

@NgModule({
  declarations: [
    App,
    Screen01,
    Screen02,
    Screen03,
    Screen04,
    Screen05,
    NoConnectivityDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
    // ConnectivityService
  ],
  bootstrap: [App]
})
export class AppModule { }
