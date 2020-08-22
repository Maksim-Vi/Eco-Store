import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ItemsStore from './itemsStore'
import s from '../../css/store.module.css'
import {searchItem, addedCountItem} from '../Common/common'

const MenuItem = ({setFilterMenu, Filter,setFilterMessage,findItem, ...props}) =>{

  let onClickFilter = (f) =>{
    return setFilterMenu(f)
  }

  return(
    <div className={s.containerMenuItem}>
    <Menu attached='top' tabular>
      <Menu.Item
        name='all'
        active={Filter === 'all'}
        onClick={onClickFilter.bind(this,'all')}
      >Все</Menu.Item>
      <Menu.Item
        name='expensive'
        active={Filter === 'expensive'}
        onClick={onClickFilter.bind(this,'expensive')}
      >Дорогие</Menu.Item>
      <Menu.Item
        name='cheap'
        active={Filter === 'cheap'}
        onClick={onClickFilter.bind(this,'cheap')}
      >Дешевые</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item >
          <div className={s.MenuSearch}>
            <Input
              value={findItem}
              onChange={e => setFilterMessage(e.target.value)}
              transparent
              size='small' 
              icon='search'
              placeholder='Поиск...'
            />
          </div>
          </Menu.Item>
        </Menu.Menu>
      
    </Menu>
    <Segment attached='bottom'>
      <ItemsStore 
                  items= {searchItem(props.items , findItem , Filter)}
                  addedCountItem={addedCountItem}
                  addItemToBasket={props.addItemToBasket}
                  itemBasket={props.itemBasket}
      />
    </Segment>
  </div>) 
}
 

export default MenuItem