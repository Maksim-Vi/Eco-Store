import React from 'react';
import s from '../../../css/storeItem.module.css'

const ItemDescriptionTable = ({data}) =>{

  let descriptionTable = data.descriptionTable;
  let colorItems = descriptionTable.color.map( color => <span key={color.id}>{color.name} </span>)
  let equipmentItems = descriptionTable.equipment.map( equipment => <span key={equipment.id}>{equipment.name}, </span>)
    
  return (
        <div className={s.DescriptionParams}>
        <ul className={s.characteristics}>
          <li className={s.items}>
            <h3 className={s.itemsTitle}>Общие характеристики</h3>
            <table>
              <tbody>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Тип</span></td>
                  <td className={s.itemValue}><p>{data.descriptionTable.typeName}</p></td>
                </tr>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Количество персон</span></td>
                  <td className={s.itemValue}><p>{data.descriptionTable.countPeople}</p></td>
                </tr>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Особенности</span></td>
                  <td className={s.itemValue}>
                    <p>
                      <span>{data.descriptionTable.features}</span> 
                    </p>
                  </td>
                </tr>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Материал</span></td>
                  <td className={s.itemValue}>
                    {colorItems}
                  </td>
                </tr>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Комплектация</span></td>
                  <td className={s.itemValue}>
                    <p>
                      {equipmentItems}
                    </p>
                  </td>
                </tr>
                <tr className={s.item}>
                  <td className={s.itemLabel}><span>Экологичность</span></td>
                  <td className={s.itemValue}><p>{data.descriptionTable.Eco}</p></td>
                </tr>
                
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    )
}

export default ItemDescriptionTable

/*
что в редакс уйдет

1) Столовые приборы
2) Выполнено из бамбука; Тканевый чехол; Подходит для многократного использования
3) Желтый Зеленый
4) Нож; Вилка; Ложка; 2 палочки; Трубочка для напитков; Мини-ершик для чистки трубочки; Чехол
*/