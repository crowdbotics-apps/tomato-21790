import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp169164209Reducer from '../features/SignUp169164209/redux/reducers'
import SignUp266162272Reducer from '../features/SignUp266162272/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp169164209: SignUp169164209Reducer,
SignUp266162272: SignUp266162272Reducer,

});