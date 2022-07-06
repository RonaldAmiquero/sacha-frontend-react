import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../config'
import { PlantsItem } from '../../components/common/PlantsItem'
import { useDebounce } from '../../hooks/useDebounce'
import './styles.css'

export const PlantsContainer = () => {
   const [plants, setPlants] = useState([])
   let [searchParams] = useSearchParams()
   let searchText = useDebounce(searchParams.get('search'), 1000)

   let searchQuery = searchText
      ? `${config.api}/plant?search=${searchText}`
      : `${config.api}/plant`

   useEffect(() => {
      const plants = axios.get(searchQuery)
      plants.then((res) => {
         setPlants(res.data.body)
      })
   }, [searchQuery])
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
