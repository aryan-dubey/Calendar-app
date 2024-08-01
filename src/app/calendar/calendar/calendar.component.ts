import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/appointment.model';
import { AppointmentService } from 'src/app/appointment.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  days: Date[] = [];

  constructor(private appointmentService: AppointmentService) {
    this.appointments$ = this.appointmentService.getAppointments();
  }

  ngOnInit(): void {
    this.appointments$ = this.appointmentService.getAppointments();
    this.generateCalendarDays();
  }

  generateCalendarDays(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.days.push(date);
    }
  }

  onDrop(event: CdkDragDrop<Appointment[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Handle moving appointments between days
      const appointment = event.previousContainer.data[event.previousIndex];
      const newDate = this.days[event.currentIndex];
      const updatedAppointment = { ...appointment, date: newDate };
      this.appointmentService.updateAppointment(updatedAppointment);
    }
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id);
  }
}