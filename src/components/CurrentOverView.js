import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { deepOrange, green, deepPurple, red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}));
function CurrentOverView({ over, ...props }) {
  const classes = useStyles();
  const isExtras = (s) => {
    let a = "" + s;
    return a.includes("WD") || a.includes("NB");
  };
  const isOut = (s) => {
    return s === "OUT";
  };
  const isDot = (s) => {
    return s === 0;
  };
  const isBoundary = (s) => {
    return s === 4 || s === 6;
  };
  return (
    <div className={classes.root}>
      {over.map((e, i) => {
        if (isDot(e)) {
          return <Avatar key={i}>{e}</Avatar>;
        } else if (isOut(e)) {
          return (
            <Avatar className={classes.red} key={i}>
              {e}
            </Avatar>
          );
        } else if (isExtras(e)) {
          return (
            <Avatar className={classes.orange} key={i}>
              {e}
            </Avatar>
          );
        } else if (isBoundary(e)) {
          return (
            <Avatar className={classes.green} key={i}>
              {e}
            </Avatar>
          );
        }
        return (
          <Avatar className={classes.purple} key={i}>
            {e}
          </Avatar>
        );
      })}
    </div>
  );
}

export default CurrentOverView;
