
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEMS = 'REMOVE_ITEMS'
const REMOVE_ONE_ITEM_FROM_ARR = 'REMOVE_ONE_ITEM_FROM_ARR'

let initialState ={
    items: []
}

const addItemToArr = (arr,item) =>{
    let items = [...arr,item]
    if(items.length > 2){
        items.sort((a,b)=> {
            return a.id - b.id
        })
    }    
    return items
}

const sortItem = (items,id) =>{
    let firstArr = []
    let secondArr = []

    items.forEach((item) => {
        if(item.id == id){
            secondArr.push(item)
        } else if (item.id !== id){
            firstArr.push(item)
        }
    })
    secondArr.splice(0,1)
    let filtItems = secondArr.concat(firstArr)
  
    let sortArr = items.reduce( (a,c,i) => {a[c.id] = i; return a }, {});
    let sortItem = filtItems.sort( (a,b) => {return sortArr[a.id] - sortArr[b.id]} );
    
    // console.log(items);
    // console.log();
    return sortItem
}



const BasketReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_ITEM:{
            let item = action.itemStore
            return { 
                ...state,
                // items:[...state.items, action.itemStore ]}               
                items: addItemToArr(state.items,action.itemStore)
            }
        }
        case REMOVE_ONE_ITEM_FROM_ARR:{
            return { 
                ...state,
                // items: state.items.find(i=>  i.id == action.id ).filter(i=> i.id !== action.id )
                // items: {...state.items.filter(i => i.id !== action.id).slice(0,1)}
                items: sortItem(state.items,action.id)
               
            }
        } 
        case REMOVE_ITEMS:{
            return { 
                ...state,
                items: state.items.filter(i=> i.id !== action.id )
            }
        } 
        default:
            return state;
    }    
}

export const addItemStore = (itemStore) => ({type: ADD_ITEM, itemStore })
export const removeItemStore = (remove) => ({type: REMOVE_ITEMS, id:remove })
export const removeOneItemStore = (remove) => ({type: REMOVE_ONE_ITEM_FROM_ARR, id:remove })

export const addItemToBasket = (itemStore) => async (dispatch) => {
    dispatch(addItemStore(itemStore))
} 

export const removeItemToBasket = (remove) => async (dispatch) => {
    dispatch(removeItemStore(remove))
} 

export const removeOneItemToBasket = (remove) => async (dispatch) => {
    dispatch(removeOneItemStore(remove))
} 

export default BasketReducer