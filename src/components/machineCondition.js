import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Title from './Title';
import { Button, makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));


export default function MachineCondition({ machines, selectedGroupId }) {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Title>マシン一覧</Title>
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
          {machines.map((machine) => (machine.group_id === selectedGroupId &&
            <TableRow key={machine.id}>
              <TableCell>{machine.name}</TableCell>
              <TableCell>{machine.ip_address}</TableCell>
              <TableCell>
                {machine.is_success_last
                  ? <CheckRoundedIcon color="primary" />
                  : <CloseRoundedIcon color="secondary" />}
              </TableCell>
              <TableCell>{machine.success_time}</TableCell>
              <TableCell>{machine.failure_time}</TableCell>
              <TableCell>
                {machine.is_active
                  ? <LibraryAddCheckIcon color="primary" />
                  : <StopRoundedIcon color="secondary" />}
              </TableCell>
              <TableCell>
                <Button
                  color="primary"
                >
                  <PlayCircleFilledIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}