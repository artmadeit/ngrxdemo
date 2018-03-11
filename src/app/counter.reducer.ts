import { Action } from '@ngrx/store';
import { CounterAction } from './counter.actions';

export function reducer(state: number = 0, action: Action): number {
  return 'execute' in action ?
    (action as CounterAction).execute(state) : state;
}
