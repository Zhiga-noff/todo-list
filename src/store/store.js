import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { isLoadingReducer, refreshReducer, taskListReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  taskListState: taskListReducer,
  refreshState: refreshReducer,
  isLoadingState: isLoadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
