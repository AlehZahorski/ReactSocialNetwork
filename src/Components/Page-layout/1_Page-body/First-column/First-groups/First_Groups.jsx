import React from 'react';
import Style from './First_Groups.module.css';
import css from '../../../../../images/css.png';
import python from '../../../../../images/python.png';
import java from '../../../../../images/java.png';
import js from '../../../../../images/js.png';
import php from '../../../../../images/php.png';
import english from '../../../../../images/england.png';

function First_Groups() {
return (
<div className={Style.First_Groups}>
   <p>Your groups:</p>
     <div className="All_Groups_flex">
       <div className={Style.Info_group_flex}>
         <div><img src={css} alt="group's name"/></div>
         <div><p>CSS_Viewer</p></div>
       </div>
       <div className={Style.Info_group_flex}>
         <div><img src={python} alt="group's name"/></div>
         <div><p>Python school</p></div>
       </div>
       <div className={Style.Info_group_flex}>
         <div><img src={java} alt="group's name"/></div>
         <div><p>java</p></div>
       </div>
        <div className={Style.Info_group_flex}>
         <div><img src={js} alt="group's name"/></div>
         <div><p>JavaScript Polska</p></div>
       </div>
        <div className={Style.Info_group_flex}>
         <div><img src={php} alt="group's name"/></div>
         <div><p>?echo PHP ?</p></div>
       </div>
       <div className={Style.Info_group_flex}>
         <div><img src={english} alt="group's name"/></div>
         <div><p>english school</p></div>
       </div>
     </div>
</div>
)
}

export default First_Groups;