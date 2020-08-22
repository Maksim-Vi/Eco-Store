import React from "react";
import Header from "../Header/header";
import s from "../../css/store.module.css";
import MenuItem from "./Menu";
import Preloader from "../Common/preloader";

const Store = (props) => {
  return (
    <div>
      <Header />
          <div className={s.introStore}></div>
          {props.items ? 
          <section className={s.section3}>
            <div className={s.container}>
              <div className={s.headerS2}>
                <h2 className={s.section3Title}></h2>
              </div>
              <MenuItem
                items={props.items}
                setFilterMenu={props.setFilterMenu}
                Filter={props.Filter}
                setFilterMessage={props.setFilterMessage}
                findItem={props.findItem}
                addItemToBasket={props.addItemToBasket}
                itemBasket={props.itemBasket}
              />
            </div>
          </section>
           : <Preloader /> 
        }
    </div>
  );
};

export default Store;
