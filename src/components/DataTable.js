import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

const DataTable = ({ data, clickAction }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nom</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Prix</StyledTableCell>
              <StyledTableCell align="right">Note</StyledTableCell>
              <StyledTableCell align="right">Garantie</StyledTableCell>
              <StyledTableCell align="right">Statut</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <StyledTableRow onClick={clickAction(row)} key={row._id} hover>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.type}</StyledTableCell>
                <StyledTableCell align="right">{`${row.price} €`}</StyledTableCell>
                <StyledTableCell align="right">
                  <Rating value={row.rating} readOnly />
                  {`(${row.rating})`}
                </StyledTableCell>
                <StyledTableCell align="right">{`${row.warranty_years} ${
                  row.warranty_years > 1 ? 'ans' : 'an'
                }`}</StyledTableCell>
                <StyledTableCell align="right">{`${
                  row.available ? 'Disponible' : 'Rupture'
                }`}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default DataTable;
