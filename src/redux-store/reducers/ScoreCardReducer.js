const initialState = {
  overs: 0,
  team1: "",
  team2: "",
  team1Players: [],
  team2Players: [],
  batting: 0,
  batsman1: {},
  batsman2: {},
  bowler: {},
  currentOver: 0,
  currentBall: 0,
  thisOver: [],
  totalScore: 0,
  strike: 0,
  extras: 0,
  target: -1,
  battedPlayers1: [],
  battedPlayers2: [],
  bowledPlayers1: [],
  bowledPlayers2: [],
  previousState: {},
  isNoBall: false,
  innings: 0,
  wickets: 0,
};
function ScoreCardReducer(state = initialState, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload) {
        return {
          ...action.payload.scorecard,
        };
      } else {
        return {
          ...initialState,
        };
      }
    case "SET_OVERS":
      return {
        ...state,
        overs: action.overs,
      };
    case "SET_TEAM1":
      return {
        ...initialState,
        team1: action.team1.toUpperCase(),
      };
    case "SET_TEAM2":
      return {
        ...state,
        team2: action.team2.toUpperCase(),
      };
    case "SET_PLAYERS_1":
      return {
        ...state,
        team1Players: action.players.filter((e) => e.value !== ""),
      };
    case "SET_PLAYERS_2":
      return {
        ...state,
        team2Players: action.players.filter((e) => e.value !== ""),
      };
    case "SET_BATSMAN_1":
      return {
        ...state,
        batsman1: action.batsman,
      };
    case "SET_BATSMAN_2":
      return {
        ...state,
        batsman2: action.batsman,
      };
    case "SET_BOWLER":
      let find =
        state.batting === 1
          ? state.bowledPlayers2.find((e) => e.key === action.bowler.key)
          : state.bowledPlayers1.find((e) => e.key === action.bowler.key);
      return {
        ...state,
        bowler: find !== undefined ? find : action.bowler,
        bowledPlayers1:
          state.batting === 1
            ? state.bowledPlayers1
            : find !== undefined
            ? state.bowledPlayers1
            : [...state.bowledPlayers1, action.bowler],
        bowledPlayers2:
          state.batting === 2
            ? state.bowledPlayers2
            : find !== undefined
            ? state.bowledPlayers2
            : [...state.bowledPlayers2, action.bowler],
      };

    case "BATTING":
      return {
        ...state,
        previousState: { ...state, previousState: {} },
        batting: action.k,
      };
    case "SET_STRIKE":
      return {
        ...state,
        strike: action.k,
      };
    case "SET_SCORE":
      return {
        ...state,
        previousState: { ...state, previousState: {} },
        strike:
          action.score === 1 || action.score === 3
            ? state.strike === 1
              ? 2
              : 1
            : state.strike,
        totalScore: state.totalScore + action.score,
        batsman1:
          state.strike === 1
            ? {
                ...state.batsman1,
                runs: state.batsman1.runs + action.score,
                ballsFaced: state.isNoBall
                  ? state.batsman1.ballsFaced
                  : state.batsman1.ballsFaced + 1,
              }
            : state.batsman1,
        batsman2:
          state.strike === 2
            ? {
                ...state.batsman2,
                runs: state.batsman2.runs + action.score,
                ballsFaced: state.isNoBall
                  ? state.batsman2.ballsFaced
                  : state.batsman2.ballsFaced + 1,
              }
            : state.batsman2,
        bowler: {
          ...state.bowler,
          runs: state.bowler.runs + action.score,
          ballsBowled: state.isNoBall
            ? state.bowler.ballsBowled
            : state.bowler.ballsBowled + 1,
        },
        currentBall: state.isNoBall ? state.currentBall : state.currentBall + 1,
        isNoBall: false,
      };
    case "SET_OVER":
      return {
        ...state,
        strike: state.strike === 1 ? 2 : 1,
        currentOver: state.currentOver + 1,
        currentBall: 0,
        bowledPlayers1:
          state.batting === 1
            ? state.bowledPlayers1
            : state.bowledPlayers1.map((e) => {
                if (e.key === state.bowler.key) {
                  return {
                    ...state.bowler,
                    ballsBowled: 0,
                    oversBowled: state.bowler.oversBowled + 1,
                  };
                }
                return { ...e };
              }),
        bowledPlayers2:
          state.batting === 2
            ? state.bowledPlayers2
            : state.bowledPlayers2.map((e) => {
                if (e.key === state.bowler.key) {
                  return {
                    ...state.bowler,
                    ballsBowled: 0,
                    oversBowled: state.bowler.oversBowled + 1,
                  };
                }
                return { ...e };
              }),
      };
    case "UNDO":
      let temp = { ...state.previousState };
      if (temp.overs) {
        return {
          ...state.previousState,
          previousState: {},
        };
      } else {
        return {
          ...state,
        };
      }
    case "SET_EXTRAS":
      return {
        ...state,
        previousState: { ...state, previousState: {} },
        totalScore: state.totalScore + 1,
        extras: state.extras + 1,
        isNoBall: action.extras,
        bowler: {
          ...state.bowler,
          runs: state.bowler.runs + 1,
        },
      };
    case "SET_WICKET":
      return {
        ...state,
        wickets: state.wickets + 1,
        previousState: { ...state, previousState: {} },
        bowler: {
          ...state.bowler,
          wickets: state.bowler.wickets + 1,
          ballsBowled: state.bowler.ballsBowled + 1,
        },
        currentBall: state.currentBall + 1,
        battedPlayers1:
          state.batting === 1
            ? state.battedPlayers1.concat(
                state.strike === 1
                  ? {
                      ...state.batsman1,
                      out: true,
                      ballsFaced: state.batsman1.ballsFaced + 1,
                    }
                  : {
                      ...state.batsman2,
                      out: true,
                      ballsFaced: state.batsman1.ballsFaced + 1,
                    }
              )
            : state.battedPlayers1,
        battedPlayers2:
          state.batting === 2
            ? state.battedPlayers2.concat(
                state.strike === 1
                  ? {
                      ...state.batsman1,
                      out: true,
                      ballsFaced: state.batsman1.ballsFaced + 1,
                    }
                  : {
                      ...state.batsman2,
                      out: true,
                      ballsFaced: state.batsman1.ballsFaced + 1,
                    }
              )
            : state.battedPlayers2,
        batsman1: state.strike === 1 ? action.newBatsman : state.batsman1,
        batsman2: state.strike === 2 ? action.newBatsman : state.batsman2,
      };
    case "SET_INNINGS":
      return {
        ...state,
        wickets: 0,
        target: state.totalScore + 1,
        totalScore: 0,
        extras: 0,
        previousState: { ...state, previousState: {} },
        innings: action.k,
        batting: state.batting === 1 ? 2 : 1,
        strike: 0,
        batsman1: {},
        batsman2: {},
        bowler: {},
        currentOver: 0,
        currentBall: 0,
        bowledPlayers1:
          state.batting === 1
            ? state.bowledPlayers1
            : state.bowledPlayers1.map((e) => {
                if (e.key === state.bowler.key) {
                  return {
                    ...state.bowler,
                  };
                }
                return { ...e };
              }),
        bowledPlayers2:
          state.batting === 2
            ? state.bowledPlayers2
            : state.bowledPlayers2.map((e) => {
                if (e.key === state.bowler.key) {
                  return {
                    ...state.bowler,
                  };
                }
                return { ...e };
              }),
        battedPlayers1:
          state.batting === 1
            ? state.battedPlayers1
                .concat({
                  ...state.batsman1,
                })
                .concat({
                  ...state.batsman2,
                })
                .filter((i) => i.key !== undefined)
            : state.battedPlayers1,
        battedPlayers2:
          state.batting === 2
            ? state.battedPlayers2
                .concat({
                  ...state.batsman1,
                })
                .concat({
                  ...state.batsman2,
                })
                .filter((i) => i.key !== undefined)
            : state.battedPlayers2,
      };
    case "NEW_MATCH":
      return {
        ...initialState,
      };
    case "RE_MATCH":
      return {
        ...initialState,
        team1: state.team1,
        team2: state.team2,
        team1Players: state.team1Players,
        team2Players: state.team2Players,
      };
    case "SUPER_OVER":
      return {
        ...initialState,
        overs: 1,
        strike: 0,
        batting: state.batting === 1 ? 2 : 1,
        team1: state.team1,
        team2: state.team2,
        team1Players: state.team1Players,
        team2Players: state.team2Players,
      };
    default:
      return {
        ...state,
      };
  }
}

export default ScoreCardReducer;
