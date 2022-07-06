import React, { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { MdKeyboardBackspace } from 'react-icons/md'
import { MdSettings } from 'react-icons/md'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { config } from '../../config'
import { AppContext } from '../../context/AppContext'
import { Question } from '../../components/common/Question'
import './styles.css'
export const Diagnostic = () => {
   const [questions, setQuestions] = useState([])
   const [anomalies, setAnomalies] = useState([])
   const navigate = useNavigate()
   const { actions } = useContext(AppContext)
   const { id } = useParams()

   useEffect(() => {
      const resultQuestions = axios.get(`${config.api}/diagnostic/${id}`)
      resultQuestions.then((res) => {
         setQuestions(res.data.body)
      })
   }, [id])
   const handleClickProcesar = (e) => {
      e.preventDefault()
      // console.log('procesar: ', anomalies)
      const resultProcess = axios.post(`${config.api}/diagnostic/process`, {
         data: { idPlanta: id, hechos: anomalies }
      })
      resultProcess.then((resultProcess) => {
         navigate('../../result', { replace: true })
         actions.addIdPlant(id)
         actions.addResultDisease(resultProcess.data.body)

         //console.log('resultProcess: ', resultProcess.data.body)
      })
   }

   return (
      <main className="Diagnostic">
         <div className="wrapper">
            <Link to="/">
               <div className="Diagnostic__return">
                  <MdKeyboardBackspace />
               </div>
            </Link>
            <h1 className="Diagnostic__title">Diagnostica la enfermedad de tu planta</h1>
            {questions.map((question) => (
               <Question
                  key={question.id_pregunta}
                  {...question}
                  anomalies={anomalies}
                  setAnomalies={setAnomalies}
               />
            ))}
            <Button variant="contained" onClick={handleClickProcesar}>
               Procesar &nbsp; <MdSettings />
            </Button>
         </div>
      </main>
   )
}
