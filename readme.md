
# Angular Custom Alert Service

<!-- <div align="center">
  <img src="https://your-image-url-here.png" alt="Custom Alert Service Logo" width="200">
</div> -->

A custom alert service for Angular using SweetAlert2 to display various types of alerts and confirmation dialogs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Examples](#examples)
- [License](#license)

## Installation

Follow these steps to integrate the custom alert service into your Angular project:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/angular-custom-alert-service.git
```

### 2. Install Dependencies

Navigate to the project's root directory and install the required dependencies using npm:

```bash
cd angular-custom-alert-service
npm install
```

### 3. Add Alert Service

In your Angular project, create an alert service (if not already present) or use the provided `AlertService` from this repository. Make sure to import and inject the service into your components where you want to use it.

## Usage

You can use the `showAlert` method to display toast alerts and the `showCustomAlert` method to create custom alert dialogs. Here's an example of how to use them in a component:

```typescript
import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private alertService: AlertService) {}

  showSuccessAlert() {
    this.alertService.showAlert('Success', 'This is a success alert!', 'success', 3000);
  }

  // ... (similar methods for other types of alerts)

  async showCustomAlert() {
    try {
      const res = await this.alertService.showCustomAlert({
        title: 'Custom Alert',
        text: 'This is a custom alert!',
        icon: 'info',
        confirmButtonText: 'OK'
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
```

## Customization

Feel free to customize the alert service and dialog options to suit your project's specific needs.

## Examples

You can find additional usage examples and customization options in the provided [example component](/src/app/app.component.ts).