import React from 'react'
import './InputField.css'
import ArrowSvg from '../../assets/icon-arrow.svg'

const InputField = () => {
    return (
        <div className="input__wrapper">
            <input placeHolder="Search for any IP address or domain" className="input" type="text" />
            <div className="input__icon-wrapper">
                <img alt="arrow icon" src={ArrowSvg}/>
            </div>
        </div>
    )
}

export default InputField
