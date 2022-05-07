import React from 'react'
import { Link } from 'react-router-dom'
import { PlantsItem } from '../../components/common/PlantsItem'
import './styles.css'

export const PlantsContainer = () => {
   const plants = [1, 2, 3, 4, 5, 6]
   return (
      <section className="PlantsContainer">
         {plants.map((plant) => (
            <Link to={`/diagnostic/${plant}`} key={plant}>
               <PlantsItem />
            </Link>
         ))}
      </section>
   )
}
