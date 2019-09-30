import { STATE } from '../states/test';

const reducer = (state = STATE, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: action.payload
      }

    default:
      return state;
  }
};

export default reducer;