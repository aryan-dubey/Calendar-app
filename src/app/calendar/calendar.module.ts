import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentsByDatePipe } from "../shared/pipes/appointments-by-date.pipe";
import { AppointmentComponent } from "../shared/appointment/appointment.component";

@NgModule({
  declarations: [CalendarComponent, AppointmentFormComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DragDropModule,
    AppointmentsByDatePipe,
    AppointmentComponent
]
})
export class CalendarModule { }