import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../css/header.module.css'
import './dropdown.css'


function useOuterClick(callback) {
    const innerRef = useRef();
    const callbackRef = useRef();
  
    // set current callback in ref, before second useEffect uses it
    useEffect(() => { // useEffect wrapper to be safe for concurrent mode
      callbackRef.current = callback;
    });
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
  
      // read most recent callback and innerRef dom node from refs
      function handleClick(e) {
        if (
          innerRef.current && 
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        ) {
          callbackRef.current(e);
        }
      }
    }, []); // no need for callback + innerRef dep
    
    return innerRef; // return ref; client can omit `useRef`
  }

const Dropdown = ({items=[]}) =>{

    let [open,SetOpen] = React.useState(false)
    const toggle =() => SetOpen(!open)

    const innerRef = useOuterClick(e => {
        SetOpen(false)
      });

    return (<div className="dd-wrapper" ref={innerRef}>
        <div onClick={()=>{toggle(!open)}}>
            {/* <li><NavLink to='/Eco-Store/Product' activeClassName={s.navActive}>Продукция</NavLink></li> */}
            <li><a>Продукция</a></li>
        </div>
        <div>
        {open && (
            <ul className="dd-list">
            {items.map(item => (
                <li className="dd-list-item" key={item.id}>
                    <NavLink 
                        to={
                            {pathname:'/' + item.value,
                            state:{
                              data: item.type
                            }}}
                    >{item.name}</NavLink>
                </li>
            ))}
            </ul>
        )}
        </div>

    </div>)
}

export default Dropdown