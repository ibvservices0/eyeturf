import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-no-connectivity-dialog',
  standalone: false,
  templateUrl: './no-connectivity-dialog.html',
  styleUrl: './no-connectivity-dialog.css'
})
export class NoConnectivityDialog {

  constructor(
    public dialogRef: MatDialogRef<NoConnectivityDialog>
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}