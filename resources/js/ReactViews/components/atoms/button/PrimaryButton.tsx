import React, { FC } from 'react'
import {ButtonFunc} from "../../../types/button";


const PrimaryButton:FC<ButtonFunc> = (props) => {
    const {children,onClick} = props
  return (
    <div>
      <button type='button' className='btn btn-outline-primary mx-2' onClick={onClick}>{children}</button>
    </div>
  )
}

export default PrimaryButton
