import {
  Avatar,
  Typography,
  Button,
  ListItem,
  // ListItemButton,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import React from "react";

// ----------------------------------------------------------------
const theme = createTheme();
const useStyles = makeStyles(() => ({
  root:{},
  avatar:{
    marginRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------

function Project({ name, properties }) {
  const classes = useStyles();
  return (
    <ListItem>
      <Button>
        {/* <Button size="large" startIcon={<Avatar src={properties.logo}/>}>{name}</Button> */}
        <Avatar
          className={classes.avatar}
          src={properties.logo}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h5">{name}</Typography>
      </Button>
      <Divider variant="inset" />
      <br/>
    </ListItem>
  );
}

export default Project;
