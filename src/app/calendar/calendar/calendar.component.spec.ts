import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentService } from 'src/app/appointment.service';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let appointmentServiceSpy: jasmine.SpyObj<AppointmentService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AppointmentService', ['getAppointments']);

    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports: [ SharedModule, NoopAnimationsModule ],
      providers: [
        { provide: AppointmentService, useValue: spy }
      ]
    }).compileComponents();

    appointmentServiceSpy = TestBed.inject(AppointmentService) as jasmine.SpyObj<AppointmentService>;
  });

  beforeEach(() => {
    appointmentServiceSpy.getAppointments.and.returnValue(of([]));
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 7 days', () => {
    expect(component.days.length).toBe(7);
  });
});