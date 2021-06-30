import React from 'react';

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [[a,d], [b,e], [c,f]] = lines[i];
    if (squares[a][d] && squares[a][d] === squares[b][e] && squares[a][d] === squares[c][f]) {
      return squares[a][d];
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i,j) {
    return (
      <Square
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i,j)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(1,0)}
          {this.renderSquare(2,0)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,1)}
          {this.renderSquare(1,1)}
          {this.renderSquare(2,1)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,2)}
          {this.renderSquare(1,2)}
          {this.renderSquare(2,2)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    const mat = Array(3);
    for(let i = 0; i < 3; i++) {
      mat[i] = Array(3).fill(null);
    }
    this.state = {
      history: [{
        squares: mat,
        //squares: Array(3).fill(null).map(row => new Array(3).fill(null)),
      }],
      stepNumber: 0,
      xIsNext: null,
    }
  }

  handleClick(i,j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i][j]){
      return;
    }
    squares[i][j] = this.state.xIsNext ? 'X' : '0';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    })

    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i,j) => this.handleClick(i,j)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;