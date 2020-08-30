import { getStoreApi } from '../../API/api';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STORE = 'SET_STORE';

let initialState ={
    items: [],
    isFetching: false,
}

const StoreReducer = (state=initialState,action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.togglePreloader}
        }
        case SET_STORE:{
            return {...state, items:action.store}
        }
        default:
            return state;
    }    
}

export  const setStore = (store) => ({ type: SET_STORE, store })
export  const toggleIsFetching = (togglePreloader) => ({ type: TOGGLE_IS_FETCHING, togglePreloader })

export const requastStore =  (token) => async (dispatch)  => {
    dispatch(toggleIsFetching(true));
    const data = await getStoreApi(token)
    console.log('data store:', data);
    dispatch(toggleIsFetching(false));
    dispatch(setStore(data)); 
    
   
} 

export default StoreReducer;


