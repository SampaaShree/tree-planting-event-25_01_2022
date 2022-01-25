import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { GenderTypes, NotificationTypes } from '../enums/enums';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  genderTypes = [
    {
      label: 'Male',
      value: GenderTypes.Male
    },
    {
      label: 'Female',
      value: GenderTypes.Female
    },
    {
      label: 'Transgender',
      value: GenderTypes.TransGender
    },
    {
      label: 'Non-binary',
      value: GenderTypes.NonBinary
    },
    {
      label: 'Prefer Not to Disclose',
      value: GenderTypes.PreferNotToDisclose
    }
  ];

  notificationTypes = [
    {
      label: 'SMS',
      value: NotificationTypes.SMS
    },
    {
      label: 'Email',
      value: NotificationTypes.Email
    },
    {
      label: 'Whatsapp',
      value: NotificationTypes.Whatsapp
    },
    {
      label: 'Call',
      value: NotificationTypes.Call
    }
  ];

  volunteerForm: FormGroup;
  public isSubmitted = false;
  public selectedNotificationTypes: NotificationTypes[] = [];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.volunteerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      gender: [GenderTypes.PreferNotToDisclose],
      comments: ['']
    });
  }

  // convenience for easy access to form fields
  get f() {
    return this.volunteerForm?.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.volunteerForm.valid && this.selectedNotificationTypes?.length > 0) {
      const args = JSON.parse(JSON.stringify(this.volunteerForm.value));
      args.notificationType = this.selectedNotificationTypes;
      console.log('The value to be sent to the backend is  ' + JSON.stringify(args));
      alert('You are successfully added as a volunteer for this tree planting event. Happy Planting!');
    }
  }

  onNotificationTypeChange(isChecked, notificationType) {
    const selectedIndex = this.selectedNotificationTypes.indexOf(notificationType.value);
    if (isChecked && selectedIndex === -1) {
      this.selectedNotificationTypes.push(notificationType.value);
    } else if (!isChecked && selectedIndex > -1) {
      this.selectedNotificationTypes.splice(selectedIndex, 1);
    }
  }
}
