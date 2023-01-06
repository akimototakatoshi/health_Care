import React, { FC } from 'react'
import "../../../../modules/home.css";
import { ButtonFunc2 } from '../../../types/button';


const RouteButton:FC<ButtonFunc2> = (props) => {
 const {children}=props;

  return (
<button className='material-symbols-outlined btn btn-info btn-lg'>{children}</button>
  )
}

export default RouteButton
