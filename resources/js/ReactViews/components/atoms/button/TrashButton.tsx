import React from 'react'

const TrashButton= (props:any) => {
  const {onClick}=props
  return (
    <a
    className="createIcon"
    onClick={onClick}
>
    <span className="material-symbols-rounded delete">
        delete
    </span>
</a>
  )
}

export default TrashButton
