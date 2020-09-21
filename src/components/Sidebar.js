import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';


export default function Sidebar({groups}) {
  console.log(groups)

  return (
    <React.Fragment>
      <List>

        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="グループ追加" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="グループ編集" />
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListSubheader inset>Group List</ListSubheader>
        {groups.map((group) => (
          <ListItem button key={group.id}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
        
      </List>
    </React.Fragment>
  )
}