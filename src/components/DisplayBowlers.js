import React from "react";
import { useSelector } from "react-redux";

function DisplayBowlers() {
  const { batting, bowledPlayers1, bowledPlayers2 } = useSelector(
    (state) => state.scorecard
  );
  return (
    <div>
        <h3>Bowlers</h3>
      {batting === 1
        ? bowledPlayers2.map((e) => {
            return (
              <div key={e.key}>
                {e.value} {e.wickets}-{e.runs}({e.oversBowled}.{e.ballsBowled})
              </div>
            );
          })
        : bowledPlayers1.map((e) => {
            return (
              <div key={e.key}>
                {e.value} {e.wickets}-{e.runs}({e.oversBowled}.{e.ballsBowled})
              </div>
            );
          })}
    </div>
  );
}

export default DisplayBowlers;
