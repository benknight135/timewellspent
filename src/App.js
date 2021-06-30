import React from 'react';
import logo from './logo.svg';

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
        <div className="anim-btns">
        </div>
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
  constructor(props) {
    super(props);
    const init_sq = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.state = {
      history: [
        {
          squares: init_sq
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i,j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (calculateWinner(squares) || squares[i][j]) {
      return;
    }
    squares[i][j] = this.state.xIsNext ? "X" : "O";
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

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
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
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
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

// React component for logo that bounces around the screen
class BouncingLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { x, y } = this.state;
    this.setState({
      x: x + Math.random() * 2 - 1,
      y: y + Math.random() * 2 - 1
    });
    requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="logo" style={{ transform: 'translate(' + x + 'px, ' + y + 'px)' }}>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export {App, BouncingLogo};