import React from 'react'
import './styles.css'
export const PlantsItem = ({ nombre, titulo, url }) => {
   return (
      <figure className="PlantsItem">
         <figcaption className="PlantsItem__name">
            <h2>{nombre}</h2>
         </figcaption>
         <div className="PlantsItem__image">
            <img src={url} alt={titulo} />
         </div>
      </figure>
   )
}
