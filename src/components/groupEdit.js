import React from 'react';
import Link from '@material-ui/core/Link';
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


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, active) {
  return { id, date, name, shipTo, paymentMethod, amount, active };
}

function preventDefault(event) {
  event.preventDefault();
}

const rows = [
  createData(0, 'Solaris', 'hinagaki@gmail.com', 'success', '2020/08/28 16:50', "2020/08/28 14:30", "true"),
];

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

export default function GroupEdit() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

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

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          target group
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value={10}>AIX</option>
          <option value={20}>HP-UX</option>
          <option value={30}>Solaris</option>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <TextField
                    required id="standard-required" 
                    label="Required" 
                    defaultValue="Solaris"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="hinagaki@gmail.com"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell><SaveRoundedIcon /></TableCell>
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
                required id="standard-required" 
                label="Required" 
                defaultValue="" 
              />
            </TableCell>
            <TableCell>
              <TextField
                required id="standard-required" 
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
        {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>
                <TextField
                  required id="standard-required" 
                  defaultValue="kiso"
                />
              </StyledTableCell>
              <StyledTableCell>
                <TextField
                  required id="standard-required" 
                  defaultValue=""
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
                  <option value={10}>AIX</option>
                  <option value={20}>HP-UX</option>
                  <option value={30}>Solaris</option>
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

      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}