import { Button,TextField } from "@material-ui/core";
import React,{useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Toss({setBatting,setOver}) {
    const history=useHistory()
  const { team1, team2,batting } = useSelector((state) => state.scorecard);
  const [overs, setOvers] = useState(1);
  const handleBatting=(k)=>{
      setBatting(k)
      setOver(overs)
      history.push('/score-card')
  }
  useEffect(()=>{
    if(batting!==0){
      history.push('/score-card')
    }
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <h1>
        {team1} vs {team2}
      </h1>
      
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
      setOver:(overs)=>{
        dispatch({
            type:'SET_OVERS',
            overs,
        })
    },
        setBatting:(k)=>{
            dispatch({
                type:"BATTING",
                k,
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Toss);
