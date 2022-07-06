import React, { useContext } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import { ResultTable } from '../../components/common/ResultTable'
import { AppContext } from '../../context/AppContext'
import './styles.css'
export const Result = () => {
   const { store } = useContext(AppContext)
   //const navigate = useNavigate()
   console.log('store:', store)
   const returnLink = `/diagnostic/${store.idPlant}`
   return (
      <main className="Result">
         <div className="wrapper">
            <Link to={returnLink}>
               <div className="Result__return">
                  <MdKeyboardBackspace />
               </div>
            </Link>
            <h1 className="Result__title">Posibles enfermedades de tu planta</h1>
            <ResultTable diseases={store.diseases} />
         </div>
      </main>
   )
}
