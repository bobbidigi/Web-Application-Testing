import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'


function App() {

  const [balls, setBall] = useState(0)
  const [strike, setStrike] = useState(0)

  const scoreboard = (call) =>{
    switch(call){

    case "strike":
      const newStrike = strike + 1
      if(newStrike === 3){
        reset();
      }else{
        setStrike(newStrike)
      }
      break;
    case "ball":
      const newBall = balls + 1
      if(newBall){
        setBall(newBall)
      }
      console.log('ball')
      break;
    case "hit":
      console.log("hit")
      break;
    case "foul":
        const newFoul = strike + 1
        if(newFoul === 3){
          reset();
        }else{
          setStrike(newFoul)
        }
      break;    
    }
  }

  const reset = () => {
    setBall(0)
    setStrike(0)
  }

  return (
    <div className="App">

     <h1>the strike zone</h1>
     
     <Dashboard
      balls={balls}
      strike={strike}
      scoreboard={scoreboard}
      />

      <Display 
        balls={balls}
        strike={strike}/>
    </div>
  );
}

export default App;
