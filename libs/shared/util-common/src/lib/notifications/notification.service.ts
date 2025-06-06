import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export abstract class NotificationService {
  constructor(private toastr: ToastrService) {}

  showError(message?: string, title?: string): void {
    message = message || 'There was an error2';
    title = title || 'Error';

    this.toastr.error(message, title);
  }

  showSuccess(message?: string, title?: string) {
    message = message || '';
    title = title || 'Success';

    this.toastr.success(message, title);
  }
}
