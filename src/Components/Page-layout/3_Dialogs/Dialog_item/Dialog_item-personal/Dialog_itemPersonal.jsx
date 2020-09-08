import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Dialog_itemPersonal.module.css';


function Dialog_itemPersonal(props){
    // let path = "/dialogs/" + props.id;
    return(
        <NavLink>
       <div className={Style.dialog_itemPersonal_message}>
              <p>Aleh Zahorski</p>
       </div>
       </NavLink>
    )
  }


  export default Dialog_itemPersonal;

