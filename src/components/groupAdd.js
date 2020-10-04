import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Title from './Title';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
  button: {
    marginLeft: -15,
  }
}));


export default function GroupAdd({ addGroup }) {
  const classes = useStyles();

  const [groupName, setGroupName] = useState("")
  const [address, setAddress] = useState("")

  const handleClickAdd = () => {
    if (groupName === "") {
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
              <TableCell>通知先メールアドレス</TableCell>
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
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-multiline-static"
                  label="mail addresses"
                  multiline
                  rows={4}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={handleClickAdd}
                  color="primary"
                  className={classes.button}
                >
                  <AddCircleIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

    </React.Fragment>
  );
}