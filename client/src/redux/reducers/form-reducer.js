import {postFormStoreApi, postFormStoreBasketApi} from '../../API/api'
import { reset } from 'redux-form'

const SET_ANSWER_FORM = "SET_ANSWER_FORM"
const ADD_ITEM_PRODUCT = 'ADD_ITEM_PRODUCT'

let initialState ={
    product:{},
    firstName: null,
    LastName: null,
    Email: null,
    subject:null,
    phone: null,
}

const AnswerFormReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_ANSWER_FORM:{
            return {...state, 
                    firstName: action.FirstName,
                    LastName: action.LastName,
                    Email: action.Email,
                    subject: action.subject,
                    phone:action.phone}
        }
        case ADD_ITEM_PRODUCT:{
            let product = {
                item: action.item,
                count: action.count
            }
            return {
                ...state,
                product:product
            }
        }
        default:
            return state;
    }    
}

export const setAnswerForm = (FirstName,LastName,Email,subject,phone) => ({type: SET_ANSWER_FORM, FirstName,LastName,Email,subject,phone})
export const addItemToProduct = (item, count) => ({type: ADD_ITEM_PRODUCT, item, count })

export const postFormStore = (token,FirstName,LastName,Email,subject,phone=null) => async (dispatch) => {
    try {
        let data = await postFormStoreApi(token,FirstName,LastName,Email,subject,phone)
        dispatch(setAnswerForm(FirstName,LastName,Email,subject,phone)); 
    } catch (error) {
        console.log(error);
        return Promise.reject()
    }

} 

export const postFormBasket = (token,FirstName,LastName=null,Email,subject=null,phone,item) => async (dispatch) => {
    try {
        let items = JSON.stringify(item)
        let data = await postFormStoreBasketApi(token,FirstName,LastName,Email,subject,phone,items)
        dispatch(setAnswerForm(FirstName,LastName,Email,subject,phone,item));
    } catch (error){
        console.log(error);
        return Promise.reject()
    }
} 




export default AnswerFormReducer;
