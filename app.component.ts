import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private alertService: AlertService) {
    // this.showSuccessAlert();
    // this.showErrorAlert();
    // this.showInfoAlert();
    this.showWarningAlert();

    // this.showConfirmation();
  }

  showSuccessAlert() {
    this.alertService.showAlert('Success', 'This is a success alert!', 'success', 3000);
  }

  showErrorAlert() {
    this.alertService.showAlert('Error', 'This is an error alert!', 'error', 3000);
  }

  showInfoAlert() {
    this.alertService.showAlert('Info', 'This is an info alert!', 'info', 3000);
  }

  showWarningAlert() {
    this.alertService.showAlert('Warning', 'This is a warning alert!', 'warning', 3000);
  }

  async showCustomAlert() {
    try {
      const res = await this.alertService.showCustomAlert({
        title: 'Custom Alert',
        text: 'This is a custom alert!',
        icon: 'info',
        confirmButtonText: 'OK'
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
