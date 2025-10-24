import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen01 } from './screen01/screen01';
import { Screen02 } from './screen02/screen02';
import { Screen03 } from './screen03/screen03';
import { Screen04 } from './screen04/screen04';
import { Screen05 } from './screen05/screen05';

const routes: Routes = [
  { path: '', redirectTo: '/screen01', pathMatch: 'full' },
  { path: 'screen01', component: Screen01 },
  { path: 'screen02', component: Screen02 },
  { path: 'screen03', component: Screen03 },
  { path: 'screen04', component: Screen04 },
  { path: 'screen05', component: Screen05 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
