import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '@ps-doggo-rating/shared/util-auth';
import { LoggerService } from '@ps-doggo-rating/shared/util-common';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [LayoutComponent],
})
export class AppComponent implements OnInit {
  title = 'ratemydoggo';

  constructor(private store: Store, private logger: LoggerService) {}

  ngOnInit(): void {
    this.checkAuth();
    this.logger.log('AppComponent initialized');
  }

  private checkAuth() {
    this.store.dispatch(AuthActions.checkAuth());
  }
}
