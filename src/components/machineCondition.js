import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Title from './Title';


export default function MachineCondition({machines, selectedGroupId}) {

  return (
    <React.Fragment>
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
          {machines.map((machine) => ( machine.group_id === selectedGroupId &&
            <TableRow key={machine.id}>
              <TableCell>{machine.name}</TableCell>
              <TableCell>{machine.ip_address}</TableCell>
              <TableCell>{machine.last_result}</TableCell>
              <TableCell>{machine.success_time}</TableCell>
              <TableCell>{machine.failure_time}</TableCell>
              <TableCell>{machine.is_active ? "true" : "false"}</TableCell>
              <TableCell><PlayCircleOutlineIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}