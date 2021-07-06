import { Button, Checkbox, Dialog, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Selection({
  open,
  handleClose,
  activity,
  setBatsman,
  setBatting,
  setBowler,
}) {
  //   const { team1, team2, batting, team1Players, team2Players } = useSelector(
  //     (state) => state.scorecard
  //   );
  //  console.log(activity);
  const [batsmen, setBatsmen] = useState([]);
  const [bowler, setSelectedBowler] = useState({});
  const handleBatsmen = (b) => {
    setBatsmen(b);
  };
  const handleBowler = (b) => {
    setSelectedBowler(b);
  };
  const handleNext = () => {
    try {
      if (
        activity === "batting" &&
        batsmen.length === 2 &&
        bowler.key !== undefined
      ) {
        setBatting(batsmen[0], batsmen[1], bowler);
        setBatsmen([]);
        handleClose();
      } else if (activity === "batsman" && batsmen.length === 1) {
        setBatsman(batsmen[0]);
        setBatsmen([]);
        handleClose();
      } else if (activity === "bowling" && bowler.key !== undefined) {
        setBowler(bowler);
        setSelectedBowler({});
        handleClose();
      } else {
        // console.log()
        alert("Pick valid requirements");
      }
    } catch (error) {
      // console.log(error)
      alert("Pick valid requirements");
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <div className="summary">
          <div style={{float:'right'}}>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
          {activity === "batting" && (
            <div>
              <Batting max={2} handle={handleBatsmen} />
              <Bowling handle={handleBowler} />
            </div>
          )}
          {activity === "batsman" && (
            <div>
              <Batting max={1} handle={handleBatsmen} />
            </div>
          )}
          {activity === "bowling" && (
            <div>
              <Bowling handle={handleBowler} />
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Selection;

function Batting({ max, handle }) {
  const [batsmen, setBatsmen] = useState([]);
  const handleChange = (event, e) => {
    let array = [...batsmen];
    console.log(event);
    if (event.target.checked) {
      array.push(e);
    } else {
      array = array.filter((f) => f.key !== e.key);
    }
    // console.log(array);
    setBatsmen(array);
    handle(array);
  };
  const {
    team1,
    team2,
    batting,
    team1Players,
    team2Players,
    battedPlayers1,
    battedPlayers2,
    batsman1,
    batsman2,
  } = useSelector((state) => state.scorecard);
  const isValidBatsman = (k) => {
    if (batting === 1) {
      return (
        batsman1.key === k ||
        batsman2.key === k ||
        battedPlayers1.find((el) => el.key === k) !== undefined ||
        (batsmen.length === max && !batsmen.find((el) => el.key === k))
      );
    }
    return (
      batsman1.key === k ||
      batsman2.key === k ||
      battedPlayers2.find((el) => el.key === k) !== undefined ||
      (batsmen.length === max && !batsmen.find((el) => el.key === k))
    );
  };
  return (
    <>
      <h1>Pick {batting === 1 ? team1 : team2} batsman</h1>
      {batting === 1
        ? team1Players.map((e) => {
            return (
              <div key={e.key}>
                <FormControlLabel
                  label={e.value}
                  disabled={isValidBatsman(e.key)}
                  control={
                    <Checkbox onChange={(event) => handleChange(event, e)} />
                  }
                ></FormControlLabel>
              </div>
            );
          })
        : team2Players.map((e) => {
            return (
              <div key={e.key}>
                <FormControlLabel
                  label={e.value}
                  disabled={isValidBatsman(e.key)}
                  control={
                    <Checkbox onChange={(event) => handleChange(event, e)} />
                  }
                ></FormControlLabel>
              </div>
            );
          })}
    </>
  );
}
function Bowling({ handle }) {
  const { team1, team2, batting, team1Players, team2Players } = useSelector(
    (state) => state.scorecard
  );
  const state = useSelector((state) => state.scorecard);
  const [bowler, setBowler] = useState({});
  const handleChange = (event, e) => {
    if (event.target.checked) {
      setBowler(e);
      handle(e);
    } else {
      setBowler({});
      handle({});
    }
    console.log(e);
  };
  const isValidBowler = (k) => {
    return (
      state.bowler.key === k || (bowler.key !== undefined && bowler.key !== k)
    );
  };
  return (
    <>
      <h1>Pick {batting === 2 ? team1 : team2} bowler</h1>
      {batting === 2
        ? team1Players.map((e) => {
            return (
              <div key={e.key}>
                <FormControlLabel
                  label={e.value}
                  disabled={isValidBowler(e.key)}
                  control={
                    <Checkbox onChange={(event) => handleChange(event, e)} />
                  }
                ></FormControlLabel>
              </div>
            );
          })
        : team2Players.map((e) => {
            return (
              <div key={e.key}>
                <FormControlLabel
                  label={e.value}
                  disabled={isValidBowler(e.key)}
                  control={
                    <Checkbox onChange={(event) => handleChange(event, e)} />
                  }
                ></FormControlLabel>
              </div>
            );
          })}
    </>
  );
}
