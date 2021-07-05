import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
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
  } = useSelector((state) => state.scorecard);
  const mergeBatsmen=(squad,played)=>{
      let array=squad.map(e=>{
          let bat=played.find(i=>i.key===e.key)
          if(batsman1.key===e.key){
              return {...batsman1}
          }
          else if(batsman2.key===e.key){
              return {...batsman2}
          }
          else if(bat!==undefined){
              return {...bat}
          }
          else{
              return ''
          }
      }).filter(i=>i!=='')
      console.log(array)
      return array
  }
  const mergeBowlers=(squad,played)=>{
      let array=squad.map(e=>{
          let ball=played.find(i=>i.key===e.key)
          if(bowler.key===e.key){
              return {...bowler}
          }
          else if(ball!==undefined){
              return {...ball}
          }
          return ''
      }).filter(i=>i!=='')
      return array
  }
  return (
    <div>
      <h1>1st Innings Summary</h1>
      <h3>Batsmen</h3>
      {batting === 1 ? (
        <BattingDisplay list={mergeBatsmen(team1Players,battedPlayers1)} />
      ) : (
        <BattingDisplay list={mergeBatsmen(team2Players,battedPlayers2)} />
      )}
      <h3>Bowlers</h3>
      {batting === 1 ? (
        <BowlingDisplay list={mergeBowlers(team2Players,bowledPlayers2)} />
      ) : (
        <BowlingDisplay list={mergeBowlers(team1Players,bowledPlayers1)} />
      )}
    </div>
  );
}

export function BattingDisplay({ list }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Player name</TableCell>
          <TableCell>Runs</TableCell>
          <TableCell>Strike rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((e) => {
          return (
            <TableRow key={e.key}>
              <TableCell>{e.value}<small style={{fontSize:'7px',color:'red'}}>{e.out?' OUT':' NOT OUT'}</small></TableCell>
              <TableCell>
                {e.runs}({e.ballsFaced})
              </TableCell>
              <TableCell>{((e.runs / e.ballsFaced) * 100).toFixed(2)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export function BowlingDisplay({ list }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Player name</TableCell>
          <TableCell>Wickets</TableCell>
          <TableCell>Runs</TableCell>
          <TableCell>Overs</TableCell>
          <TableCell>Economy</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((e) => {
          return (
            <TableRow key={e.key}>
              <TableCell>{e.value}</TableCell>
              <TableCell>{e.wickets}</TableCell>
              <TableCell>{e.runs}</TableCell>
              <TableCell>
                {e.oversBowled+(e.ballsBowled===6?1:0)}.{e.ballsBowled===6?0:e.ballsBowled}
              </TableCell>
              <TableCell>{(e.runs/ (e.oversBowled+(e.ballsBowled<=3?0:1))).toFixed(2)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
