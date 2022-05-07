import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { ResultTable } from '../../components/common/ResultTable'
import './styles.css'
export const Result = () => {
   return (
      <main className="Result">
         <div className="wrapper">
            <a href="/" className="Result__return">
               <MdKeyboardBackspace />
            </a>
            <h1 className="Result__title">Posibles enfermedades de tu planta</h1>
            <ResultTable />
         </div>
      </main>
   )
}
