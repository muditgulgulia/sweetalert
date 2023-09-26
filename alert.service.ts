import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() { }

  // Method to show a toast alert with customizable title, message, icon, and duration
  showAlert(title: string, message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info', duration: number = 3000) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: duration,
    });
  }

  // Method to show a confirmation dialog with customizable options
  showCustomAlert(options: SweetAlertOptions) {
    // Default options for confirmation dialog
    const defaultOptions: SweetAlertOptions = {
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    };

    // Merge the user-provided options with the default options
    const mergedOptions = { ...defaultOptions, ...options };

    return Swal.fire(mergedOptions);
  }
}
