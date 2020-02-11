import React from 'react';
import Style from './Dialogs.module.css';
import Dialog_item from './Dialog_item/Dialog_item';
import Dialog_message from './Dialog_message/Dialog_message';




function Dialogs(props){


  let Dialogs_Data_massive = 
  props.state.user_id.map( (Dialog_Data) => <Dialog_item  name={Dialog_Data.name} key={Dialog_Data.id} id={Dialog_Data.id} />);

  let Dialogs_Message_massive =
   props.state.user_messages.map((Message) =>  <Dialog_message key={Message.id} id={Message.id} message={Message.message} />);

  return(
    <div className={Style.Dialogs}>
       <div className={Style.Dialogs_items}>
              {Dialogs_Data_massive}
       </div>
       <div className={Style.Messages}>
              {Dialogs_Message_massive}
       </div>
    </div>
  )
}


export default Dialogs;