import axios from 'axios'
import store from '../store'
const Realm = require('realm');



// this needs to be re-written so it can be re-used for api calls
// or even without them

export class dbObjectUtil {

  //! 4)
  // save to DB here
  _storeObjects = (objects = []) => {
    return new Promise((resolve, reject) => {
      try {
        let modifiedDbObjects = []
        Realm.write(() => {
          // Do some database transactions
          // add modified objects to modifiedDbObjects

        })
        resolve(modifiedDbObjects)
      } catch (e) {
        reject(e)
      }
    })
  }

  //! 1)
  // this gets called from the thunk to dispatch the return object from realm 
  // to the redux reducer to handle logic and state
  someDBInteraction = () => {

    //! 2)
    // make the api call
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        console.log(res)
        // pass the response to the callback at the bottom
        callBack(res)
      })
      .catch(error => {
        console.log(error)
        // pass the error to the callback
        errorHandler(error)
      })


    //! 3)
    const callBack = (res) => {
      // pass the res to the method above to save to DB
      this._storeObjects(res)
        .then(modifiedDbObjects => {
          //! 5)
          // once the object is saved to DB get it from the return 
          // and pass it to redux with an action dispatched from here
          store.dispatch(successAction(modifiedObjects))
        }).catch((e) => {
          // else if DB returns an error handle it
          errorHandler(e)
        })
    }

    //? OPTIONAL)
    const errorHandler = (error) => {
      // call action to handle error
      this.store.dispatch(errorAction(error))
    }
  }
}