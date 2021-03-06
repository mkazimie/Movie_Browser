import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import {loadState, saveState} from '../localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;