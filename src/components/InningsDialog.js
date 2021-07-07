import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  withStyles,
} from "@material-ui/core";

import { useSelector } from "react-redux";

export default function InningsDialog() {
  const {
    batting,
    battedPlayers1,
    battedPlayers2,
    bowledPlayers1,
    bowledPlayers2,
    team1Players,
    team2Players,
    batsman1,
    batsman2,
    bowler,
    totalScore,
    wickets,
    team1,
    team2,
    extras,
    currentOver,
    currentBall,
  } = useSelector((state) => state.scorecard);
  const mergeBatsmen = (squad, played) => {
    let array = squad
      .map((e) => {
        let bat = played.find((i) => i.key === e.key);
        if (batsman1.key === e.key) {
          return { ...batsman1 };
        } else if (batsman2.key === e.key) {
          return { ...batsman2 };
        } else if (bat !== undefined) {
          return { ...bat };
        } else {
          return "";
        }
      })
      .filter((i) => i !== "");
    return array;
  };
  const mergeBowlers = (squad, played) => {
    let array = squad
      .map((e) => {
        let ball = played.find((i) => i.key === e.key);
        if (bowler.key === e.key) {
          return { ...bowler };
        } else if (ball !== undefined) {
          return { ...ball };
        }
        return "";
      })
      .filter((i) => i !== "");
    return array;
  };
  return (
    <div className="summary" style={{textAlign:'center'}}>
      <u><h1>1st innings</h1></u>
      <div className="score">
        <div>
          <span className="total-score">
            {totalScore} - {wickets}
          </span>{" "}
          <span className="balls">
            {currentOver+currentBall===6?1:0}.{currentBall===6?0:currentBall}
          </span>
        </div>
        <div>
          {team1} vs {team2}
        </div>
        <div>Extras :{extras}</div>
      </div>
      <h3>Batsmen</h3>
      {batting === 1 ? (
        <BattingDisplay list={mergeBatsmen(team1Players, battedPlayers1)} />
      ) : (
        <BattingDisplay list={mergeBatsmen(team2Players, battedPlayers2)} />
      )}
      <h3>Bowlers</h3>
      {batting === 1 ? (
        <BowlingDisplay list={mergeBowlers(team2Players, bowledPlayers2)} />
      ) : (
        <BowlingDisplay list={mergeBowlers(team1Players, bowledPlayers1)} />
      )}
    </div>
  );
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export function BattingDisplay({ list }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Player name</StyledTableCell>
            <StyledTableCell>Runs</StyledTableCell>
            <StyledTableCell>Strike rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((e) => {
            return (
              <StyledTableRow key={e.key}>
                <StyledTableCell>
                  {e.value}
                  <small style={{ fontSize: "7px", color: "red" }}>
                    {e.out ? " OUT" : " NOT OUT"}
                  </small>
                </StyledTableCell>
                <StyledTableCell>
                  {e.runs}({e.ballsFaced})
                </StyledTableCell>
                <StyledTableCell>
                  {((e.runs / e.ballsFaced) * 100).toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export function BowlingDisplay({ list }) {
  const economy = (runs, overs, balls) => {
    let a = balls / 6;
    let b = overs + a;
    return runs / b;
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Player name</StyledTableCell>
            <StyledTableCell>Wickets</StyledTableCell>
            <StyledTableCell>Runs</StyledTableCell>
            <StyledTableCell>Overs</StyledTableCell>
            <StyledTableCell>Economy</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((e) => {
            return (
              <StyledTableRow key={e.key}>
                <StyledTableCell>{e.value}</StyledTableCell>
                <StyledTableCell>{e.wickets}</StyledTableCell>
                <StyledTableCell>{e.runs}</StyledTableCell>
                <StyledTableCell>
                  {e.oversBowled + (e.ballsBowled === 6 ? 1 : 0)}.
                  {e.ballsBowled === 6 ? 0 : e.ballsBowled}
                </StyledTableCell>
                <StyledTableCell>
                  {economy(e.runs, e.oversBowled, e.ballsBowled).toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
