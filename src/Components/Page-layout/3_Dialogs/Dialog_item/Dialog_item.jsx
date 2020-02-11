import React from 'react';
import {NavLink} from 'react-router-dom';
import Style from './Dialog_item.module.css';


function Dialog_item(props){

    let path = "/dialogs/" + props.id;
    return(
          <div className={Style.Dialog}>
          <NavLink to={path}>{props.name}</NavLink>
          </div>    
    )
  }


  export default Dialog_item;