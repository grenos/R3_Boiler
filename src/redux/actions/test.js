import { dbObjectUtil } from '../utils/db-util'


// action with thunk and realm
export const testAction = () => {
  return (dispatch, getState) => {

    //! use to get data from state
    // const { reducer } = getState();
    // const { test } = reducer;

    // this will return the actual action object we need 
    dbObjectUtil().someDBInteraction()

  }
}
