import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import Switch from '@material-ui/core/Switch';
import Title from './Title';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
  selectGroup, deleteGroup }) {

  const classes = useStyles();
  const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

  const [newGroupName, setNewGroupName] = useState("")
  const [newMailAddresses, setNewMailAddresses] = useState("")

  useEffect(() => {
    if (groups.length > 0) {
      selectGroup(groups[0].id)
    }
  }, [mode])

  useEffect(() => {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].id === selectedGroupId){
        setNewGroupName(groups[i].name)
        setNewMailAddresses(groups[i].to_addresses)
      }
    }
  }, [selectedGroupId])

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [active, setActive] = React.useState(true);
  const handleSwitch = event => {
    setActive(event.target.checked)
  }

  const handleDeleteGroup = () => {
    deleteGroup(selectedGroupId)
  }

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

        <Title>Edit Group Info</Title>
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
                <TableCell><SaveRoundedIcon /></TableCell>
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
        <Title>Add New Machine</Title>
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
                  defaultValue=""
                />
              </TableCell>
              <TableCell>
                <TextField
                  required
                  label="Required"
                  defaultValue=""
                />
              </TableCell>
              <TableCell><AddCircleOutlineRoundedIcon /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.paper}>
        <Title>Edit Group's Machines</Title>
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
              <StyledTableRow key={machine.id}>
                <StyledTableCell>
                  <TextField
                    required
                    defaultValue={machine.name}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    defaultValue={machine.ip_address}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <FormControl className={classes.formControl}>
                    <NativeSelect
                      value={state.age}
                      onChange={handleChange}
                      inputProps={{
                        name: 'age',
                        id: 'age-native-label-placeholder',
                      }}
                    >
                      {groups.map(group =>
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      )}
                    </NativeSelect>
                  </FormControl>
                </StyledTableCell>
                <StyledTableCell>
                  <Switch
                    checked={active}
                    onChange={handleSwitch}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </StyledTableCell>
                <StyledTableCell><SaveRoundedIcon /></StyledTableCell>
                <StyledTableCell><DeleteForeverRoundedIcon /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </React.Fragment>
  );
}