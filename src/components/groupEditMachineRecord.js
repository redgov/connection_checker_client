import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Switch from '@material-ui/core/Switch';


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
  },
}));

export default function GroupEditMachineRecord({ machine, groups,
  deleteMachine }) {

  const classes = useStyles();

  const [name, setName] = useState(machine.name)
  const [address, setAddress] = useState(machine.ip_address)
  const [groupId, setGroupId] = useState(machine.group_id)
  const [isActive, setIsActive] = useState(machine.is_active)

  return (
    <StyledTableRow>
      <StyledTableCell>
        <TextField
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </StyledTableCell>
      <StyledTableCell>
        <TextField
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </StyledTableCell>
      <StyledTableCell>
        <FormControl className={classes.formControl}>
          <NativeSelect 
            onChange={e => setGroupId(e.target.key)}
            value={groupId}
          >
            {groups.map(group =>
              <option 
                key={group.id}
                value={group.id}
              >
                {group.name}
              </option>
            )}
          </NativeSelect>
        </FormControl>
      </StyledTableCell>
      <StyledTableCell>
        <Switch
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
          color="primary"
        />
      </StyledTableCell>
      <StyledTableCell>
        <SaveRoundedIcon />
      </StyledTableCell>
      <StyledTableCell
        onClick={() => deleteMachine(machine.id)}  
      >
        <DeleteForeverRoundedIcon />
      </StyledTableCell>
    </StyledTableRow>
  );
}