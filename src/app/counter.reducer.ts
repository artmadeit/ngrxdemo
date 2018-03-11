import { CounterActionTypes, CounterActions } from './counter.actions';

export function reducer(state: number = 0, action: CounterActions): number {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return state + 1;
    }

    case CounterActionTypes.DECREMENT: {
      return state - 1;
    }

    case CounterActionTypes.RESET: {
      return action.payload; // typed to number
    }

    default: {
      return state;
    }
  }
}
