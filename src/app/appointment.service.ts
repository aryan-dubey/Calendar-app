import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([]);

  getAppointments(): Observable<Appointment[]> {
    return this.appointments.asObservable().pipe(
      catchError(this.handleError)
    );
  }

  addAppointment(appointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    this.appointments.next([...currentAppointments, appointment]);
  }

  deleteAppointment(id: string): void {
    const currentAppointments = this.appointments.getValue();
    this.appointments.next(currentAppointments.filter(app => app.id !== id));
  }

  updateAppointment(updatedAppointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    const index = currentAppointments.findIndex(app => app.id === updatedAppointment.id);
    if (index !== -1) {
      currentAppointments[index] = updatedAppointment;
      this.appointments.next([...currentAppointments]);
    }
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred; please try again later.'));
  }
}