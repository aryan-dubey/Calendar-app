import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from 'src/app/appointment.model';


@Pipe({
  name: 'appointmentsByDate',
  standalone: true
})
export class AppointmentsByDatePipe implements PipeTransform {
  transform(appointments: Appointment[] | null, date: Date): Appointment[] {
    if (!appointments) return [];
    return appointments.filter(appointment => 
      appointment.date.toDateString() === date.toDateString()
    );
  }
}