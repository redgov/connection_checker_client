import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Title from './Title';
import GroupEditMachineRecord from '../containers/groupEditMachineRecord';



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

export default function GroupEdit({ machines, groups, mode, selectedGroupId,
  selectGroup, deleteGroup, editGroup, addMachine }) {

  const classes = useStyles();

  const [newGroupName, setNewGroupName] = useState("")
  const [newMailAddresses, setNewMailAddresses] = useState("")

  useEffect(() => {
    if (groups.length > 0) {
      selectGroup(groups[0].id)
    }
  }, [mode])

  useEffect(() => {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].id === selectedGroupId) {
        setNewGroupName(groups[i].name)
        setNewMailAddresses(groups[i].to_addresses)
      }
    }
  }, [selectedGroupId])

  useEffect(() => {
    let shouldChange = true
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].id === selectedGroupId){
        shouldChange = false
  }
    }
    if (shouldChange && groups.length > 0){
      selectGroup(groups[0].id)
    }

  }, [groups])

  // for add machine
  const [newMachineName, setNewMachineName] = useState("")
  const [newMachineAddress, setNewMachineAddress] = useState("")

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          target group
        </InputLabel>
        <NativeSelect
          value={selectedGroupId}
          onChange={(e) => selectGroup(Number(e.target.value))}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>編集したいグループを選択してください</FormHelperText>
      </FormControl>

      <Paper className={classes.paper}>

        <Title>グループ編集</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>グループ名</TableCell>
              <TableCell>送信先メールアドレス</TableCell>
              <TableCell>更新</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group) => (group.id === selectedGroupId &&
              <TableRow key={group.id}>
                <TableCell>
                  <TextField
                    required
                    label="Required"
                    value={newGroupName}
                    onChange={e => setNewGroupName(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    value={newMailAddresses}
                    onChange={e => setNewMailAddresses(e.target.value)}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <SaveRoundedIcon
                    button="true"
                    onClick={() => editGroup(
                      selectedGroupId,
                      newGroupName,
                      newMailAddresses)}
                  />
                </TableCell>
                <TableCell>
                  <DeleteForeverRoundedIcon
                    button="true"
                    onClick={handleDeleteGroup}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.paper}>
        <Title>新マシン追加</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ホスト名</TableCell>
              <TableCell>IPアドレス</TableCell>
              <TableCell>追加</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="0">
              <TableCell>
                <TextField
                  required
                  label="Required"
                  value={newMachineName}
                  onChange={(e) => setNewMachineName(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  required
                  label="Required"
                  value={newMachineAddress}
                  onChange={(e) => setNewMachineAddress(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <AddCircleOutlineRoundedIcon 
                  button="true"
                  onClick={() => addMachine(
                    selectedGroupId,
                    newMachineName,
                    newMachineAddress
                  )}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.paper}>
        <Title>マシン情報編集</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ホスト名</TableCell>
              <TableCell>IPアドレス</TableCell>
              <TableCell>所属グループ</TableCell>
              <TableCell>有効/無効</TableCell>
              <TableCell>更新</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {machines.map((machine) => (
              <GroupEditMachineRecord key={machine.id} machine={machine} />
            ))}
          </TableBody>
        </Table>
      </Paper>

    </React.Fragment>
  );
}