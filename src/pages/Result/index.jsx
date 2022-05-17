import React, { useContext } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { ResultTable } from '../../components/common/ResultTable'
import { AppContext } from '../../context/AppContext'
import './styles.css'
export const Result = () => {
   const { store } = useContext(AppContext)
   return (
      <main className="Result">
         <div className="wrapper">
            <a href="/" className="Result__return">
               <MdKeyboardBackspace />
            </a>
            <h1 className="Result__title">Posibles enfermedades de tu planta</h1>
            <ResultTable diseases={store.diseases} />
         </div>
      </main>
   )
}
