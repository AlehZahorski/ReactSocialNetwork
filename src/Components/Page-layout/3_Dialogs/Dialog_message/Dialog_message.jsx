import React from 'react';
import Style from './Dialog_message.module.css';



function Dialog_message(props){
return(
    <div className={Style.Message}>{props.message}</div>
 )
}
    

export default Dialog_message;