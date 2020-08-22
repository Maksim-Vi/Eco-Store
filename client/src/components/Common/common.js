import orderBy from 'lodash/orderBy';

export const totalPriceCount = (item) =>{
    let initialValue = 0;
    return item.reduce((total, item) => total+(item.price-item.salePrice), initialValue)
}

let sortBy = (items,Filter) =>{
    switch (Filter) {
      case 'all':{
        return items
      }
      case 'expensive':{
        return orderBy(items, 'price','desc')
      }
      case 'cheap':{
        return orderBy(items, 'price','asc')
      }
      default:
        return items
    }
}

let FilterItems = (items, findItem) =>{
    return items.filter( 
      item =>
        item.name.toLowerCase().indexOf(findItem.toLowerCase()) >=0)
}
  
export const searchItem = (items, findItem, Filter) =>{
  return  sortBy(FilterItems(items,findItem),Filter)
}

export const addedCountItem = (itemBasket,itemId) => {
    return itemBasket.reduce((count, item) => {
      return count + (item.id === itemId ? 1 : 0)
    }, 0)
}