import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import { HashRouter as Router, Switch, Route,Link} from "react-router-dom";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Summary from "./components/Summary";

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
}));

function App() {
  const classes = useStyles();
  const handleNewMatch=()=>{
    localStorage.clear()
  }
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Scorecard
          </Typography>
          <Button onClick={handleNewMatch} color="inherit"><Link style={{color:'white',textDecoration:'none'}} to='/'>New match</Link></Button>
        </Toolbar>
      </AppBar>
      
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
