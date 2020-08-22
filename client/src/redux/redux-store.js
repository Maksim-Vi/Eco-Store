
import thunkMiddleware from "redux-thunk";
import { combineReducers, applyMiddleware, createStore , compose} from "redux";

import AppReducer from "./reducers/app-reducer";
import StoreReducer from "./reducers/store-reducer";
import PopularReducer from "./reducers/popular-reducer";
import BasketReducer from "./reducers/basket-reducer";
import FilterReducer from './reducers/filter-reducer';
import {reducer as formReducer} from "redux-form"
import AnswerFormReducer from "./reducers/form-reducer";

let reducers = combineReducers({
    app: AppReducer,
    store: StoreReducer,
    popular: PopularReducer,
    basket: BasketReducer,
    filter: FilterReducer,
    answerForm: AnswerFormReducer,
    
    form:formReducer
    }
);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;