import { INIT } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  value: ''
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        value: action.value
      });
      break;
    default:
      return state;
  }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
      default:
          return state;
    }
}

const App = combineReducers({
    app,
    extra
});

export default App;
