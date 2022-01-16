import React from 'react'
import './style.scss'
interface Props {
    
}

export const SwitchColor = (props: Props) => {
    return (
     <label className="switch">
            <input type="checkbox"  />
            <span className="slider round"></span>
      </label>
    )
}
