import { Button } from "@material-ui/core";
import React from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Toss({setBatting}) {
    const history=useHistory()
  const { team1, team2 } = useSelector((state) => state.scorecard);
  const handleBatting=(k)=>{
      setBatting(k)
      history.push('/score-card')
  }
  return (
    <div>
      <h1>
        {team1} vs {team2}
      </h1>
      <b>{"Team opt to bat --> "}</b>
      <Button color="primary" variant="contained" onClick={()=>handleBatting(1)}>
        {team1}
      </Button>{" "}
      <Button color="primary" variant="contained" onClick={()=>handleBatting(2)}>
        {team2}
      </Button>
    </div>
  );
}
const mapDispatchToProps=dispatch=>{
    return{
        setBatting:(k)=>{
            dispatch({
                type:"BATTING",
                k,
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Toss);
