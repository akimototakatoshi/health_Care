import React from 'react'

const AddButton = (props:any) => {
    const{onClick}=props

  return (
    <a
    className="createIcon"
    onClick={onClick}
>
    <span className="material-symbols-outlined add">
        add_box
    </span>
</a>
  )
}

export default AddButton
