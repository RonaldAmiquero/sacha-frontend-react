import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import './styles.css'
export const Question = () => {
   const [anomalies, setAnomalies] = React.useState([])
   console.log(anomalies)

   const handleChange = (event) => {
      const index = anomalies.indexOf(event.target.value)

      if (index === -1) {
         return setAnomalies([...anomalies, event.target.value])
      }
      setAnomalies(anomalies.filter((value) => value !== event.target.value))
   }

   const data = [
      { value: 'caida de las cerezas prematuras' },
      { value: 'caida de las cerezas prematuras salter' },
      { value: 'caida de las cerezas ' },
      { value: 'caida de las cerezas prematuras cerezas' }
   ]
   return (
      <div className="Question">
         <div className="wrapper">
            <p className="Question__title">¿Que anomalias presenta el fruto?</p>
            <div className="Question__options">
               {data.map((item) => (
                  <FormControlLabel
                     key={item.value}
                     className="Options__item"
                     label={item.value}
                     control={
                        <Checkbox
                           checked={anomalies.includes(item.value)}
                           value={item.value}
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
