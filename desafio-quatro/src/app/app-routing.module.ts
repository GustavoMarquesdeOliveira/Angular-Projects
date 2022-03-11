import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { AgendarComponent } from './agendar/agendar.component';
const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'agendar', component: AgendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
