import React from 'react';
import Style from './Information.module.css';
import Information_ico from '../../../../../images/cog-solid.png';





function Information() {
    return(
        <div className={Style.Information}>
            <div className={`${Style.Information_all} ${Style.Information__name}`}>
                <p>Aleh Zahorski</p>
                <p className={Style.Information_all__status}>...</p>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
                <div className={Style.Information__left}>Age:</div>
                <div className={Style.Information__right}>25</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>City:</div>
                <div className={Style.Information__right}>Warsaw</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>School:</div>
                <div className={Style.Information__right}>WARSAW SCHOOL OF COMPUTER SCIENCE (WWSI) 2018-2022</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>Year of study:</div>
                <div className={Style.Information__right}>2-й</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>Language:</div>
                <div className={Style.Information__right}>Russian, English, Polish</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>Stack:</div>
                <div className={Style.Information__right}>CSS/HTML/JS</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>Interesting:</div>
                <div className={Style.Information__right}>Music, Cinema, web-dev</div>
            </div>
            <div className={`${Style.Information_all} ${Style.Information__grid}`}>
            <div className={Style.Information__left}>Status:</div>
                <div className={Style.Information__right}>Active (looking for a team / job)</div>
            </div>

            <div className={Style.Information__settings}>
            <div className={Style.Information_settings__text}>
            Edit profile
            </div>
            <div className={Style.Information_settings__ico}>
                <img className={Style.Information_settings__ico_size} src={Information_ico} />
            </div>
            </div>
        </div>

        
    )
}

export default Information;