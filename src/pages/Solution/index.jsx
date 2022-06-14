import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdKeyboardBackspace } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { FcPrint } from 'react-icons/fc'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import './styles.css'

export const Solution = () => {
   const { id } = useParams()
   const [solution, setSolution] = useState({})
   const [loading, setLoading] = useState(true)
   const { nombre, descripcion, mas_info_url, preventions, images } = solution
   console.log(images)

   useEffect(() => {
      axios.get(`http://localhost:3002/api/v1/solution/${id}`).then((res) => {
         setSolution(res.data.body)
         setLoading(false)
      })
   }, [id])

   if (loading) {
      return <div>Loading...</div>
   }

   return (
      <main className="Solution">
         <div className="wrapper">
            <Link to="/result">
               <div className="Diagnostic__return">
                  <MdKeyboardBackspace />
               </div>
            </Link>
            <h1 className="Solution__title">Consejos para controlar la enfermedad</h1>
            <div className="Solution__imagenes">
               {images.map((image) => (
                  <div className="Solution__imagen" key={image.id_imagen}>
                     <img src={image.url} alt={image.titulo} />
                  </div>
               ))}
            </div>
            <div className="Disease">
               <h2 className="Disease__title">Nombre de la enfermedad</h2>
               <p className="Disease__copy">{nombre}</p>
               <h2 className="Disease__description">Descripción de la enfermedad</h2>
               <p className="Disease__copy">
                  {`${descripcion} `}
                  <a href={mas_info_url} target="_blank" rel="noopener noreferrer">
                     más-info
                  </a>
               </p>
               <h2 className="Disease__prevention">¿Cómo combatir la enfermedad?</h2>
               <p className="Disease__copy Disease__copy--left">
                  {preventions.map((prevention) => (
                     <>
                        <p className="Prevention__title">{prevention.titulo}</p>
                        <ul>
                           {prevention.descripcion.map((desc) => (
                              <li>{`${desc}.`}</li>
                           ))}
                        </ul>
                        <br />
                     </>
                  ))}
               </p>
            </div>
            <div className="Solution__actions">
               <div className="Solution__action">
                  <Button
                     variant="contained"
                     startIcon={<FcPrint />}
                     className="Solution__print"
                  >
                     Imprimir reporte
                  </Button>
               </div>
               <div className="Solution__action">
                  <Link to="/">
                     <Button
                        variant="contained"
                        startIcon={<FaHome />}
                        className="Solution__home"
                     >
                        Ir al inicio
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </main>
   )
}
