import React from 'react'

const FavoriteButton = (props:any) => {
    const{onClick}=props

  return (
    <a
    className="createIcon"
    onClick={onClick}
>
    <span className="material-symbols-rounded">
    favorite
    </span>
</a>
  )
}

export default FavoriteButton
