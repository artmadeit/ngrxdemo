import { Action } from '@ngrx/store';

export interface CounterAction extends Action {
  execute(state): number;
}

export class Increment implements CounterAction {
  readonly type = '[Counter] Increment';
  execute(state) {
    return state + 1;
  }
}

export class Decrement implements CounterAction {
  readonly type = '[Counter] Decrement';
  execute(state) {
    return state - 1;
  }
}

export class Reset implements CounterAction {
  readonly type = '[Counter] Reset';

  constructor(public payload: number) { }

  execute(state) {
    return this.payload; // typed to number
  }
}
