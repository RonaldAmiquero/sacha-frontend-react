import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import './styles.css'
export const Question = ({ titulo, anomalias, anomalies, setAnomalies }) => {
   const handleChange = (event) => {
      const index = anomalies.indexOf(event.target.value)

      if (index === -1) {
         return setAnomalies([...anomalies, event.target.value])
      }
      setAnomalies(anomalies.filter((value) => value !== event.target.value))
   }

   return (
      <div className="Question">
         <div className="wrapper">
            <p className="Question__title">{titulo}</p>
            <div className="Question__options">
               {anomalias.map((anomaly) => (
                  <FormControlLabel
                     key={anomaly}
                     className="Options__item"
                     label={anomaly}
                     control={
                        <Checkbox
                           checked={anomalies.includes(anomaly)}
                           value={anomaly}
                           onChange={handleChange}
                        />
                     }
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
