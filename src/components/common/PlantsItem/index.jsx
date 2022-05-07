import React from 'react'
import './styles.css'
export const PlantsItem = () => {
   return (
      <figure className="PlantsItem">
         <figcaption className="PlantsItem__name">
            <h2>Cafe</h2>
         </figcaption>
         <div className="PlantsItem__image">
            <img src="https://i.postimg.cc/pr3gpY2t/cafe.png" alt="Plant" />
         </div>
      </figure>
   )
}
