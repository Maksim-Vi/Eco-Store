import { getPopularApi } from '../../API/api'

const SET_POPULAR = 'SET_POPULAR'


let initialState ={
    popularProduct:[
        // {id:1, img: img1, text:{text1:"it", text2:"will be",text3:"some text"}},
        // {id:2, img: img2, text:{text1:"it", text2:"will be",text3:"some text"}},
        // {id:3, img: img3, text:{text1:"it", text2:"will be",text3:"some text"}}
    ],
}

const PopularReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_POPULAR:{
            return {...state,popularProduct: action.popular}
        }
        default:
            return state;
    }    
}

export  const setPopular = (popular) => ({ type: SET_POPULAR, popular })

export const PopularApi = (token) => async (dispatch) => {
    let data = await getPopularApi(token)    
    dispatch(setPopular(data)); 
} 

export default PopularReducer;

/*
1) img
2) it</span> will be <br/> some text

*/