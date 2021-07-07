import { TextField, Button } from "@material-ui/core";
import React, { useState} from "react";
import {useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Entry({ setPlayers1, setPlayers2 }) {
  const { team1, team2, team1Players,team2Players } = useSelector(
    (state) => state.scorecard
  );

  const [team, setTeam] = useState(0);
  const init = [
    { key: 1, value: "" },
    { key: 2, value: "" },
    { key: 3, value: "" },
    { key: 4, value: "" },
    { key: 5, value: "" },
    { key: 6, value: "" },
    { key: 7, value: "" },
    { key: 8, value: "" },
    { key: 9, value: "" },
    { key: 10, value: "" },
    { key: 11, value: "" },
  ];
  const [players, setPlayers] = useState(init);
  useEffect(() => {
    if (team === 0) {
      let array = players.map((val) => {
        let obj = {
          key: val.key,
          value:
            team1Players.find((k) => k.key === val.key) !== undefined
              ? team1Players.find((k) => k.key === val.key).value
              : "",
        };
        return { ...obj };
      });
      setPlayers(array);
    }
    else if (team === 1) {
      let array = players.map((val) => {
        let obj = {
          key: val.key,
          value:
            team2Players.find((k) => k.key === val.key) !== undefined
              ? team2Players.find((k) => k.key === val.key).value
              : "",
        };
        return { ...obj };
      });
      setPlayers(array);
    }
  }, [team]);// eslint-disable-line react-hooks/exhaustive-deps
  const history = useHistory();
  const handleChange = (e, i) => {
    let temp = [...players];
    let updated = [
      ...temp.slice(0, i),
      { key: i + 1, value: e.target.value },
      ...temp.slice(i + 1),
    ];
    setPlayers(updated);
  };
  const handleNext = () => {
    let array = players.filter((e) => e.value !== "");
    if (array.length < 2 || (team===1&&(array.length !== team1Players.length))) {
      alert("pick valid number of players");
    } else {
      if (team === 0) {
        setTeam(1);
        setPlayers(init);
        setPlayers1(players);
      } else {
        setPlayers2(players);
        history.push("/toss");
      }
    }
  };
  const handlePrevious = () => {
    if (team === 0) {
      history.push("/");
    } else {
      setTeam(0);
      setPlayers2(init);
    }
  };
  return (
    <div>
      <h1>{team === 0 ? team1 : team2} Players</h1>
      <div className="form-group">
        <Button color="primary" variant="contained" onClick={handlePrevious}>
          Previous
        </Button>{" "}
        <Button color="primary" variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
      {players.map((element, i) => {
        return (
          <div key={element.key} className="form-group">
            <TextField
              variant="outlined"
              color="primary"
              label={`Player name ${element.key}`}
              value={element.value}
              onChange={(event) => {
                handleChange(event, i);
              }}
              required
            />
          </div>
        );
      })}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setPlayers1: (players) => {
      dispatch({
        type: "SET_PLAYERS_1",
        players,
      });
    },
    setPlayers2: (players) => {
      dispatch({
        type: "SET_PLAYERS_2",
        players,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Entry);
