import React from 'react'
import './styles.css'
import { PlantsContainer } from '../../containers/PlantsContainer'
export const Home = () => {
   return (
      <main className="Home">
         <div className="wrapper">
            <h1 className="Home__title">Escoge el tipo de planta</h1>
            <PlantsContainer />
         </div>
      </main>
   )
}
