import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Home({setOver,setTeamN1,setTeamN2}) {
  const [overs, setOvers] = useState(1);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const history=useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setOver(overs)
    setTeamN1(team1)
    setTeamN2(team2)
    history.push('/entry')
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <TextField
            variant="outlined"
            type="number"
            color="primary"
            label="Overs"
            value={overs}
            onChange={(e) => {
              setOvers(
                e.target.value !== "" && e.target.value < 1 ? 1 : e.target.value
              );
            }}
            required
          />
        </div>
        <div className="form-group">
          <TextField
            variant="outlined"
            color="primary"
            label="Team1"
            value={team1}
            onChange={(e) => {
              setTeam1(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <TextField
            variant="outlined"
            color="primary"
            label="Team2"
            value={team2}
            onChange={(e) => {
              setTeam2(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <Button type="submit" color="primary" variant="contained">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps=dispatch=>{
    return{
        setOver:(overs)=>{
            dispatch({
                type:'SET_OVERS',
                overs,
            })
        },
        setTeamN1:(team1)=>{
            dispatch({
                type:'SET_TEAM1',
                team1,
            })
        },
        setTeamN2:(team2)=>{
            dispatch({
                type:'SET_TEAM2',
                team2,
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Home);
