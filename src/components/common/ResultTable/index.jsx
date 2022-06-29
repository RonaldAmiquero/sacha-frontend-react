import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import './styles.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#c2bebe',
      color: '#343a40',
      fontSize: 14
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14
   }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0
   }
}))

export const ResultTable = ({ diseases }) => {
   return (
      <TableContainer component={Paper} className="table-container-custom">
         <Table aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell>Nro</StyledTableCell>
                  <StyledTableCell>Enfermedad</StyledTableCell>
                  <StyledTableCell align="right">Probabilidad</StyledTableCell>
                  <StyledTableCell align="center">¿Como curarlo?</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {diseases.map((disease, index) => (
                  <StyledTableRow key={index + 1}>
                     <StyledTableCell>{index + 1}</StyledTableCell>
                     <StyledTableCell>{disease.name}</StyledTableCell>
                     <StyledTableCell align="right">
                        {`${disease.probability}%`}
                     </StyledTableCell>
                     <StyledTableCell align="center" className="solution-buscar">
                        <Link to={`/solution/${disease.id_disease}`}>
                           <Button variant="contained">Buscar</Button>
                        </Link>
                     </StyledTableCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
