import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentsByDatePipe } from './pipes/appointments-by-date.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AppointmentComponent,
    AppointmentsByDatePipe
  ],
  exports: [
    AppointmentComponent,
    AppointmentsByDatePipe
  ]
})
export class SharedModule { }