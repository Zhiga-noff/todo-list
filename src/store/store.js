import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import {
  isLoadingReducer,
  refreshReducer,
  requestTaskReducer,
  taskListReducer,
} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  taskListState: taskListReducer,
  requestTaskState: requestTaskReducer,
  refreshState: refreshReducer,
  isLoadingState: isLoadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
