import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import Replay from "@material-ui/icons/Replay";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Entry from "./components/Entry";
import Toss from "./components/Toss";
import ScoreCard from "./components/ScoreCard";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Summary from "./components/Summary";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function App() {
  const { team2Players } = useSelector((state) => state.scorecard);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const linkRef = useRef(null);
  const handleNewMatch = () => {
    dispatch({
      type: "NEW_MATCH",
    });
    localStorage.clear();
  };
  const handleRematch = () => {
    if (team2Players.length === 0) {
      alert("Rematch Unavailable");
    } else {
      dispatch({
        type: "RE_MATCH",
      });
      linkRef.current.click();
    }
    setDrawer(false);
  };
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Scorecard
            </Typography>
            <Button onClick={handleNewMatch} color="inherit">
              <Link className="non-white-link" to="/">
                New match
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor={"left"} open={drawer} onClose={() => setDrawer(false)}>
          <h3
            onClick={() => setDrawer(false)}
            style={{ color: "#3f51b5", cursor: "pointer", textAlign: "center" }}
          >
            Magical Drawer
          </h3>
          <Divider />
          <List className={classes.list}>
            <ListItem button onClick={handleRematch}>
              <ListItemIcon>
                <Replay />
              </ListItemIcon>
              <ListItemText primary="Re-match" />
              <Link ref={linkRef} to="/toss"></Link>
            </ListItem>
            <ListItem disabled={team2Players.length===0} button onClick={()=>setDrawer(false)}>
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText primary={<Link className="non-link" to="/entry">Add/Update players</Link>}/>
                
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/entry">
            <Entry />
          </Route>
          <Route exact path="/toss">
            <Toss />
          </Route>
          <Route exact path="/score-card">
            <ScoreCard />
          </Route>
          <Route exact path="/summary">
            <Summary />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
