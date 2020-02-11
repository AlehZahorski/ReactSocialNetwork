import React from 'react';
import Profile_photo from '../../../../../images/Profile_photo.png';
import Style from './Photo.module.css';


function Photo() {
    return(
<div className={Style.Profile}>
<img className={Style.Profile_photo} src={Profile_photo} />
<button className={Style.Profile__Settings_photo} type="button">
<p>Change photo</p>
</button>
</div>
 )
}

export default Photo;