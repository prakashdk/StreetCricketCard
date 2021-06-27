import { Button } from "@material-ui/core";
import { SwapVert } from "@material-ui/icons";
import React, { useState, useEffect,useCallback } from "react";
import { connect, useSelector } from "react-redux";
import DisplayBowlers from "./DisplayBowlers";
import Selection from "./Selection";

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
    batting,
    battedPlayers1,
    battedPlayers2,
    previousState,
  } = useSelector((state) => state.scorecard);
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState("");
  const handleInnings=useCallback(()=>{
    if(innings===0){
      setInnings(1)
    }
    else{

    }
  },[innings,setInnings])

  useEffect(()=>{
    console.log(currentBall+" called")
    if(currentBall===6&&currentOver===overs-1){
      handleInnings()
    }
    else if(currentBall===6){
      setOver()
      setActivity("bowling")
      setOpen(true)
    }
  },[currentBall,currentOver,overs,handleInnings,setOver])
  useEffect(() => {
    if (strike === 0) {
      setActivity("batting");
      setOpen(true);
    }
  }, [strike]);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleWicket=()=>{
    setActivity('batsman')
    setOpen(true)
  }
  
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
      wickets:0,
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
      wickets:0,
    };
    setSelectedBowler(bowler1);
  };

  return (
    <div> 
      {isNoBall?<h2 style={{color:'red'}}>it is a no ball, select the runs scored bay batsman in no ball</h2>:<></>}
      {previousState.isNoBall?<h2 style={{color:'red'}}>it is a Free hit</h2>:<></>}
      {innings===1?<h2>Target :{target}</h2>:<></>}
      <h3>Total score :{totalScore}{" "}-{" "}{batting===1?battedPlayers1.length:battedPlayers2.length}</h3>
      <h5>Extras :{extras}</h5>
      <h5>
        Overs :{currentOver}.{currentBall}
      </h5>
      <p>
        {batsman1.value}
        <b>{strike === 1 && "*"}</b> {batsman1.runs}({batsman1.ballsFaced})
      </p>
      <p>
        {batsman2.value}
        <b>{strike === 2 && "*"}</b> {batsman2.runs}({batsman2.ballsFaced})
      </p>
      <p>
        {bowler.value} {bowler.wickets}-{bowler.runs}({bowler.oversBowled}.{bowler.ballsBowled})
      </p>
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
          }}
        >
          0
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(1);
          }}
        >
          1
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(2);
          }}
        >
          2
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(3);
          }}
        >
          3
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(4);
          }}
        >
          4
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setScore(6);
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
          onClick={() => undo()}
        >
          Undo
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setExtras(false)}
        >
          WD
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setExtras(true)}
        >
          NB
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleWicket}
          disabled={previousState.isNoBall}
        >
          OUT
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleInnings}
        >
          END
        </Button>
      </div>
      <DisplayBowlers/>

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

