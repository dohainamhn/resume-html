import React from 'react'

interface Props {
    iconClass:String
}

export const SocialIcon = (props: Props) => {
    const {iconClass} = props;
    return (
        <li className='social-icon '>
            <a href="#" className='social-icon-link'>
                <i className={`${iconClass}`}></i>
            </a>
        </li>
    )
}
