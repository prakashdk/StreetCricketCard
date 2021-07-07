import { Button, Dialog } from "@material-ui/core";
import { ArrowRight, SwapVert, Restore } from "@material-ui/icons";
import React, { useState, useEffect, useCallback } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DisplayBowlers from "./DisplayBowlers";
import InningsDialog from "./InningsDialog";
import Selection from "./Selection";
import CurrentOverView from "./CurrentOverView";

function ScoreCard({
  setScore,
  setBatsman1,
  setBatsman2,
  setSelectedBowler,
  setStrike,
  setOver,
  undo,
  setExtras,
  setWicket,
  setInnings,
}) {
  const {
    team1,
    team2,
    innings,
    target,
    overs,
    bowler,
    strike,
    batsman1,
    batsman2,
    totalScore,
    currentOver,
    currentBall,
    isNoBall,
    extras,
    team1Players,
    previousState,
    wickets,
  } = useSelector((state) => state.scorecard);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openSummary, setOpenSummary] = useState(false);
  const [activity, setActivity] = useState("");
  const [thisOver, setThisOver] = useState([]);
  const runRate = () => {
    let a = currentBall / 6;
    let b = currentOver + a;
    return totalScore / b;
  };
  const reqRunRate = () => {
    let run = target - totalScore;
    let over = overs - currentOver - 1;
    let ball = 6 - currentBall;
    let a = ball / 6;
    let b = over + a;
    return run / b;
  };
  const handleThisOver = (s) => {
    let array = [...thisOver];
    let p = array.pop();
    if (p === "NB") {
      setThisOver([...array, "NB+" + s]);
    } else {
      setThisOver((o) => [...o, s]);
    }
  };
  const popThisOver = () => {
    let array = [...thisOver];
    array.pop();
    setThisOver(array);
  };
  const handleInnings = useCallback(() => {
    // console.log(innings + " innings");
    if (innings === 0) {
      setOpenSummary(true);
      // setInnings(1)
    } else if (innings === 1) {
      //alert("Match over");
      setInnings(2);
      history.push("/summary");
    }
    setThisOver([]);
  }, [innings, setInnings, history]);

  useEffect(() => {
    if (
      (currentBall === 6 && currentOver === overs - 1) ||
      (innings === 1 && totalScore >= target) ||
      wickets === team1Players.length - 1
    ) {
      // console.log("over use effect called");
      handleInnings();
      setThisOver([]);
    } else if (currentBall === 6) {
      if (wickets < team1Players.length - 1) {
        setActivity("bowling");
        setOpen(true);
        setOver();
      }
      setThisOver([]);
    }
  }, [
    currentBall,
    currentOver,
    overs,
    handleInnings,
    setOver,
    wickets,
    team1Players,
    innings,
    totalScore,
    target,
  ]);
  useEffect(() => {
    // console.log("strike useEffect called");
    if(innings===2){
      history.push('/summary')
    }
    if (strike === 0) {
      setActivity("batting");
      setOpen(true);
    }
  }, [strike]);// eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    setOpen(false);
  };
  const handleWicket = () => {
    if (wickets === team1Players.length - 2) {
      setWicket({});
    } else {
      setActivity("batsman");
      setOpen(true);
    }
  };

  const setBatting = (p1, p2, b1) => {
    let player1 = {
      key: p1.key,
      value: p1.value,
      out: false,
      ballsFaced: 0,
      runs: 0,
    };
    let player2 = {
      key: p2.key,
      value: p2.value,
      out: false,
      ballsFaced: 0,
      runs: 0,
    };
    let bowler1 = {
      key: b1.key,
      value: b1.value,
      bowled: false,
      oversBowled: 0,
      ballsBowled: 0,
      runs: 0,
      wickets: 0,
    };

    setBatsman1(player1);
    setBatsman2(player2);
    setSelectedBowler(bowler1);
    setStrike(1);
  };
  const setBatsman = (p1) => {
    let player1 = {
      key: p1.key,
      value: p1.value,
      out: false,
      ballsFaced: 0,
      runs: 0,
    };
    setWicket(player1);
    // setBatsman2(player2);
  };
  const setBowler = (b1) => {
    let bowler1 = {
      key: b1.key,
      value: b1.value,
      bowled: false,
      oversBowled: 0,
      ballsBowled: 0,
      runs: 0,
      wickets: 0,
    };
    setSelectedBowler(bowler1);
  };

  return (
    <div>
      <h1>{innings === 0 ? "1st" : "2nd"} INNINGS</h1>
      {isNoBall ? (
        <h2 style={{ color: "red" }}>
          it's a no ball, select the runs scored by batsman in no ball
        </h2>
      ) : (
        <></>
      )}
      {previousState.isNoBall ? (
        <h2 style={{ color: "red" }}>it's a Free hit</h2>
      ) : (
        <></>
      )}
      {innings === 1 ? <h2>Target :{target}</h2> : <></>}
      {innings === 1 ? (
        <h2 style={{ color: "green" }}>
          {target - totalScore === 1 ? "Its a tie" : ""}
        </h2>
      ) : (
        <></>
      )}
      {innings === 1 ? (
        <h2 style={{ color: "red" }}>
          {target - totalScore} runs needed from{" "}
          {overs * 6 - (currentOver * 6 + currentBall)} balls
        </h2>
      ) : (
        <></>
      )}
      <h5>Total overs: {overs}</h5>
      <div className="box">
        <div className="score-display">
          <div className="batsman-group">
            <div className="batsman">
              <div
                className="batsman1"
                style={{ display: "grid", gridTemplateColumns: "auto auto" }}
              >
                <div className="batsman-runs">
                  <ArrowRight
                    style={{
                      visibility: `${strike === 1 ? "visible" : "hidden"}`,
                    }}
                  />
                  {batsman1.value}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="batsman-runs">{batsman1.runs}</span>
                  <span className="balls">{batsman1.ballsFaced}</span>
                </div>
              </div>
              <hr></hr>
              <div
                className="batsman1"
                style={{ display: "grid", gridTemplateColumns: "auto auto" }}
              >
                <div className="batsman-runs">
                  <ArrowRight
                    style={{
                      visibility: `${strike === 2 ? "visible" : "hidden"}`,
                    }}
                  />
                  {batsman2.value}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="batsman-runs">{batsman2.runs}</span>
                  <span className="balls">{batsman2.ballsFaced}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="score">
            <div>
              <span className="total-score">
                {totalScore} - {wickets}
              </span>{" "}
              <span className="balls">
                {currentOver}.{currentBall}
              </span>
            </div>
            <div>
              {team1} vs {team2}
            </div>
            <div>Extras :{extras}</div>
            <div>
              Cur.Run Rate:{totalScore === 0 ? "0.00" : runRate().toFixed(2)}
            </div>
          </div>
          <div className="bowler">
            <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
              <div className="batsman-runs">{bowler.value}</div>
              <div style={{ textAlign: "right" }}>
                <span className="batsman-runs">
                  {bowler.wickets}-{bowler.runs}
                </span>
                <span className="balls">
                  {bowler.oversBowled}.{bowler.ballsBowled}
                </span>
              </div>
            </div>
            <div className="this-over">
              <CurrentOverView over={thisOver} />
            </div>
          </div>
        </div>
      </div>
      <div>{innings === 1 && `Req.Run rate:${reqRunRate().toFixed(2)}`}</div>
      <Selection
        open={open}
        setBatting={setBatting}
        setBatsman={setBatsman}
        setBowler={setBowler}
        handleClose={handleClose}
        activity={activity}
      />
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(0);
            handleThisOver(0);
          }}
        >
          0
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(1);
            handleThisOver(1);
          }}
        >
          1
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(2);
            handleThisOver(2);
          }}
        >
          2
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(3);
            handleThisOver(3);
          }}
        >
          3
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(4);
            handleThisOver(4);
          }}
        >
          4
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(6);
            handleThisOver(6);
          }}
        >
          6
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setStrike(strike === 1 ? 2 : 1)}
        >
          <SwapVert />
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            undo();
            popThisOver();
          }}
        >
          <Restore />
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setExtras(false);
            handleThisOver("WD");
          }}
        >
          WD
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setExtras(true);
            handleThisOver("NB");
          }}
        >
          NB
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            handleWicket();
            handleThisOver("OUT");
          }}
        >
          OUT
        </Button>
        <Button color="primary" variant="contained" onClick={handleInnings}>
          END
        </Button>
      </div>
      <DisplayBowlers />
      <Dialog
        open={openSummary}
        onClose={() => {
          setInnings(1);
          setOpenSummary(false);
        }}
      >
        <InningsDialog />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            setInnings(1);
            setOpenSummary(false);
          }}
        >
          Close
        </Button>
      </Dialog>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setBatsman1: (batsman) => {
      dispatch({
        type: "SET_BATSMAN_1",
        batsman,
      });
    },
    setBatsman2: (batsman) => {
      dispatch({
        type: "SET_BATSMAN_2",
        batsman,
      });
    },
    setSelectedBowler: (bowler) => {
      dispatch({
        type: "SET_BOWLER",
        bowler,
      });
    },
    setStrike: (k) => {
      dispatch({
        type: "SET_STRIKE",
        k,
      });
    },
    setScore: (score) => {
      dispatch({
        type: "SET_SCORE",
        score,
      });
    },
    setOver: () => {
      dispatch({
        type: "SET_OVER",
      });
    },
    undo: () => {
      dispatch({
        type: "UNDO",
      });
    },
    setExtras: (extras) => {
      dispatch({
        type: "SET_EXTRAS",
        extras,
      });
    },
    setWicket: (newBatsman) => {
      dispatch({
        type: "SET_WICKET",
        newBatsman,
      });
    },
    setInnings: (k) => {
      dispatch({
        type: "SET_INNINGS",
        k,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ScoreCard);
