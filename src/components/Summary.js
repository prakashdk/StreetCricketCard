import React from "react";
import { useSelector } from "react-redux";
import { BattingDisplay, BowlingDisplay } from "./InningsDialog";

function Summary() {
  const { batting, target, totalScore, wickets } = useSelector(
    (state) => state.scorecard.previousState
  );
  const {
    team1,
    team2,
    team1Players,
    team2Players,
    battedPlayers1,
    bowledPlayers1,
    battedPlayers2,
    bowledPlayers2,
  } = useSelector((state) => state.scorecard);
  return (
    <div>
      <h1>Match Over</h1>
      {target <= totalScore ? (
        <h2 style={{color:'red'}}>
          {batting === 1 ? team1 : team2} won by{" "}
          {batting === 1
            ? team1Players.length - wickets
            : team2Players.length - wickets}{" "}
          wickets
        </h2>
      ) : (target-1>totalScore?
        <h2 style={{color:'red'}}>
          {batting === 1 ? team2 : team1} won by {target - totalScore} runs
        </h2>:<h2 style={{color:'green'}}>
          Scores level.It's a tie.
        </h2>
      )}
      <h1>1st innings</h1>
      {batting === 1 ? (
        <>
        <h2>{team2} Batsmen</h2>
          <BattingDisplay list={battedPlayers2.sort((a,b)=>a.key-b.key)} />
          <h2>{team1} Bowlers</h2>
          <BowlingDisplay list={bowledPlayers1} />
        </>
      ) : (
        <>
        <h2>{team1} Batsmen</h2>
          <BattingDisplay list={battedPlayers1.sort((a,b)=>a.key-b.key)} />
          <h2>{team2} Bowlers</h2>
          <BowlingDisplay list={bowledPlayers2} />
        </>
      )}
      <h1>2nd innings</h1>
      {batting === 2 ? (
        <>
        <h2>{team2} Batsmen</h2>
          <BattingDisplay list={battedPlayers2.sort((a,b)=>a.key-b.key)} />
          <h2>{team1} Bowlers</h2>
          <BowlingDisplay list={bowledPlayers1} />
        </>
      ) : (
        <>
        <h2>{team1} Batsmen</h2>
          <BattingDisplay list={battedPlayers1.sort((a,b)=>a.key-b.key)} />
          <h2>{team2} Bowlers</h2>
          <BowlingDisplay list={bowledPlayers2} />
        </>
      )}
    </div>
  );
}

export default Summary;
