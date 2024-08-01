import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Appointment } from 'src/app/appointment.model';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-content>
        <h3>{{ appointment.title }}</h3>
        <p>{{ appointment.startTime }} - {{ appointment.endTime }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="warn" (click)="onDelete()">Delete</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin-bottom: 10px;
    }
  `]
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.appointment.id);
  }
}