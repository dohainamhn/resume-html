import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home';
import './style.scss'
interface Props {
    onClick: ()=> void,
    nav: boolean,
    t:any
}

export const Profile = (props: Props) => {
    const {onClick, nav, t} = props;
    return (
        <div className={nav ? `header__wrapper header__active` : "header__wrapper "}>
            <Header onClick={onClick}/>
             <Home t = {t}/>
        </div>
    )
}
