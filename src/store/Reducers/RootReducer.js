import AutheReducer from './AutheReducer'
import ProjetoReducer from './ProjetoReducer'

import {combineReducers} from 'redux'

const RootReducer = combineReducers({
  Auth: AutheReducer,
  Projeto: ProjetoReducer
});

export default RootReducer
