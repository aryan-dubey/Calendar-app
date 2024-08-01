import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/appointment.model';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const formValue = this.appointmentForm.value;
      const appointment: Appointment = {
        id: Date.now().toString(),
        title: formValue.title,
        date: formValue.date,
        startTime: formValue.startTime,
        endTime: formValue.endTime
      };
      this.appointmentService.addAppointment(appointment);
      this.appointmentForm.reset();
    }
  }
}