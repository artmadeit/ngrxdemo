import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './counter.actions';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  reset() {
    this.store.dispatch(new Counter.Reset(0));
  }
}
