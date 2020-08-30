import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, active) {
  return { id, date, name, shipTo, paymentMethod, amount, active };
}

const rows = [
  createData(0, 'sakura', '172.16.1.213', 'success', '2020/08/28 16:50', "2020/08/28 14:30", "true"),
  createData(1, 'v_sakura', '172.16.1.214', 'failure', '2020/08/28 16:50', "2020/08/28 16:52", "false"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function MachineCondition() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Group Name</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ホスト名</TableCell>
            <TableCell>IPアドレス</TableCell>
            <TableCell>最新疎通結果</TableCell>
            <TableCell>最終疎通成功時刻</TableCell>
            <TableCell>疎通失敗時刻</TableCell>
            <TableCell>有効/無効</TableCell>
            <TableCell>即時実行</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.active}</TableCell>
              <TableCell><PlayCircleOutlineIcon /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}