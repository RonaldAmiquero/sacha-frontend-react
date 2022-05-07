import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

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

function createData(nro, enfermedad, probabilidad) {
   return { nro, enfermedad, probabilidad }
}

const rows = [
   createData(1, 'La roya del cafe', 100),
   createData(2, 'El minador', 10),
   createData(3, 'Ginger', 7)
]

export const ResultTable = () => {
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
               {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                     <StyledTableCell>{row.nro}</StyledTableCell>
                     <StyledTableCell>{row.enfermedad}</StyledTableCell>
                     <StyledTableCell align="right">{`${row.probabilidad}%`}</StyledTableCell>
                     <StyledTableCell align="center">
                        <Button variant="contained">Buscar</Button>
                     </StyledTableCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
