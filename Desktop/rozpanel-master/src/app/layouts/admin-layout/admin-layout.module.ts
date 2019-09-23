import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from 'app/layouts/components/components.module';
import { AdminLayoutRoutes } from './admin-layout.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ComponentsModule,
  ],
  declarations: [
  ],
 
})

export class AdminLayoutModule {}
