import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PlantsItem } from '../../components/common/PlantsItem'
import './styles.css'

export const PlantsContainer = () => {
   const [plants, setPlants] = useState([])
   useEffect(() => {
      const plants = axios.get('http://localhost:3002/api/v1/plant')
      plants.then((res) => {
         setPlants(res.data.body)
      })
   }, [])
   return (
      <section className="PlantsContainer">
         {plants.map((plant) => (
            <Link to={`/diagnostic/${plant.id_planta}`} key={plant.id_planta}>
               <PlantsItem {...plant} />
            </Link>
         ))}
      </section>
   )
}
