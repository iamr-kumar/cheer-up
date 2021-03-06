import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TimelineIcon from "@material-ui/icons/Timeline";
import CreateIcon from "@material-ui/icons/Create";
import PeopleIcon from "@material-ui/icons/People";
import Link from "next/link";
import { AddCircle } from "@material-ui/icons";
import MessageIcon from "@material-ui/icons/Message";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = ({ open, handleDrawerClose, user }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link
          href={
            user.category === "user" ? "/user/profile" : "/therapist/profile"
          }
          passHref
        >
          <ListItem button component="a">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        {user.category === "user" && (
          <Link href="/user/dashboard" passHref>
            <ListItem button component="a">
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
        )}

        {user.category === "user" && (
          <Link href="/user/journal" passHref>
            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Journal" />
            </ListItem>
          </Link>
        )}
        {user.category === "therapist" && (
          <Link href="/therapist/requests" passHref>
            <ListItem button>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText primary="Requests" />
            </ListItem>
          </Link>
        )}

        <Link
          href={
            user.category === "user" ? "/user/therapist" : "/therpist/clients"
          }
          passHref
        >
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary={user.category === "user" ? "Therapist" : "Clients"}
            />
          </ListItem>
        </Link>
        {user.category === "therapist" && (
          <Link href="/therapist/message" passHref>
            <ListItem button>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </Link>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
