import React, { FC } from 'react'
import { ButtonFunc } from '../../../types/button'

const DeleteButton:FC<ButtonFunc> = (props) => {
const {children,onClick} = props
  return (

      <button type='button' className='btn btn-outline-danger mx-2' onClick={onClick}>{children}</button>

  )
}

export default DeleteButton
