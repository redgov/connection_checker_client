import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Title from './Title';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    marginBottom: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
}));


export default function GroupAdd({ addGroup }) {
  const classes = useStyles();

  const [groupName, setGroupName] = useState("")
  const [address, setAddress] = useState("")

  const handleClickAdd = () => {
    if (groupName === ""){
      alert("グループ名は最低一文字入力してください")
      return
    }
    addGroup(groupName, address)
  }

  return (
    <React.Fragment>

      <Paper className={classes.paper}>
        <Title>Add New Machine</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>グループ名</TableCell>
              <TableCell>通知先IPアドレス</TableCell>
              <TableCell>追加</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="0">
              <TableCell>
                <TextField
                  required
                  label="Required"
                  value={groupName}
                  onChange={(e)=>setGroupName(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  required
                  label="Required"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <AddCircleOutlineRoundedIcon button="true" onClick={handleClickAdd} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

    </React.Fragment>
  );
}