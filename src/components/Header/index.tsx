import React from 'react'
import './style.scss'
interface Props {
    onClick:()=>void
}

export const Header = (props: Props) => {
   const {onClick} = props;
    return (
        <div className='header'>
            <i className="fas fa-bars header__icon" onClick={onClick}></i>
            <div className="header__title"><a href="#" className='header__link'>Bac</a></div>
        </div>
    )
}
