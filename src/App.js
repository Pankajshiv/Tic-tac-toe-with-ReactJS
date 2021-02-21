import React from "react";
import './App.css';
import Row from "./Row";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      grids:[
        ["","",""],
        ["","",""],
        ["","",""],
      ],
      currentPlayer:"X",
      gameStatus:"",
      counter:1,
    };
  }

  handleCellClick=(event,row,col)=>{

    const gridCopy=this.state.grids;

    if(this.state.gameStatus ==="" && gridCopy[row][col]===""){

      gridCopy[row][col]=this.state.currentPlayer;
      this.setState({
        grid:gridCopy,
      });

      this.setState({
        counter:this.state.counter+1,
      });

      let current=this.state.currentPlayer;
      let condition=current+current+current;
    
      if(
        gridCopy[0][0]+gridCopy[0][1]+gridCopy[0][2]===condition||
        gridCopy[1][0]+gridCopy[1][1]+gridCopy[1][2]===condition||
        gridCopy[2][0]+gridCopy[2][1]+gridCopy[2][2]===condition||
        gridCopy[0][0]+gridCopy[1][0]+gridCopy[2][0]===condition||
        gridCopy[0][1]+gridCopy[1][1]+gridCopy[2][1]===condition||
        gridCopy[0][2]+gridCopy[1][2]+gridCopy[2][2]===condition||
        gridCopy[0][0]+gridCopy[1][1]+gridCopy[2][2]===condition||
        gridCopy[0][2]+gridCopy[1][1]+gridCopy[2][0]===condition
      ){
        this.setState({
          gameStatus:`player ${this.state.currentPlayer} has won !`,
        });
      }
      else if(this.state.counter===9){
        this.setState({
          gameStatus:`Game is Draw !`,
        });
      }

      this.setState({
        currentPlayer:this.state.currentPlayer==="X"?"O":"X",
      });

    }
  }

  handleRestartClick(){
    window.location.reload();
  }

  render(){
    return(
      <>
      <div className="App">
        <h1>Tic Tac Toe</h1>
        {this.state.grids.map((value,index)=>(
          <Row
            key={index}
            rowIndex={index}
            value={value}
            handleCellClick={this.handleCellClick}
          />
        ))}

        {this.state.gameStatus!==""?<h3>{this.state.gameStatus}</h3>:<h3>It's player {this.state.currentPlayer}'s turn</h3>}
        <button className="btn" onClick={this.handleRestartClick}>Restart Game</button>
      </div>
      </>
    ) 
  }
}

export default App;

