import React from 'react'
import Button from '@mui/material/Button'
import { MdKeyboardBackspace } from 'react-icons/md'
import { MdSettings } from 'react-icons/md'
import { Question } from '../../components/common/Question'
import './styles.css'
export const Diagnostic = () => {
   const data = [1, 2, 3, 4, 5, 6]
   return (
      <main className="Diagnostic">
         <div className="wrapper">
            <a href="/" className="Diagnostic__return">
               <MdKeyboardBackspace />
            </a>
            <h1 className="Diagnostic__title">Diagnostica la enfermedad de tu planta</h1>
            {data.map((item) => (
               <Question key={item} />
            ))}
            <Button variant="contained">
               Procesar &nbsp; <MdSettings />
            </Button>
         </div>
      </main>
   )
}
