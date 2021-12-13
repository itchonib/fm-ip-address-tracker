import React from 'react'
import './InputField.css'
import ArrowSvg from '../../assets/icon-arrow.svg'

const InputField = ({handleSubmit}) => {
    return (
        <form className="input__wrapper" onSubmit={handleSubmit}>
            <input id="ipAddress"placeHolder="Search for any IP address or domain" className="input text-overflow" type="text" />
            <button type="submit" className="input__icon-wrapper">
                <img alt="arrow icon" src={ArrowSvg}/>
            </button>
        </form>
    )
}

export default InputField
