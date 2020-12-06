import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubbishComponent } from './rubbish.component';
import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
const routes: Routes = [{
  path: '',
  component: RubbishComponent,
  pathMatch: 'full',
}];
@NgModule({
  declarations: [RubbishComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    NbLayoutModule,
    NbSidebarModule, 
    NbButtonModule,
  ]
})
export class RubbishModule { }
