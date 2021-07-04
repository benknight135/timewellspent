import React from 'react';
import './TicTac.css';

function TicTacSquare(props){
  return(
    <button className="tictac-square" onClick={props.onClick}>
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

class TicTacBoard extends React.Component {
  renderSquare(i,j) {
    return (
      <TicTacSquare
        key={i + '-' + j}
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i,j)}
      />
    );
  }

  render() {
    var board_rows = [];
    for (var i=0; i < 3; i++) {
      var board_row_squares = [];
      for (var j=0; j < 3; j++) {
        board_row_squares.push(this.renderSquare(i,j));
      }
      board_rows.push(
        <div className="tictac-board-row" key={i}>
          {board_row_squares}
        </div>
      );
    }
    return (
      <div>
        <div className="tictac-board-squares">
        </div>
        {board_rows}
      </div>
    );
  }
}

class TicTac extends React.Component {
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
      xIsNext: true,
      historyOrderDesending: false
    };
  }

  handleHistoryClick(i,j) {
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

  // set history order to ascending
  toggleHistoryOrder() {
    this.setState({
      historyOrderDesending: !this.state.historyOrderDesending
    });
  }

  render() {
    const history = this.state.history;
    const historyOrderDesending = this.state.historyOrderDesending;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      var move_index = move;
      if (historyOrderDesending) {
        move_index = (history.length - 1) - move;
      }
      const desc = move_index ?
        'Move #' + move_index :
        'Game start';
      var descStyle = "tictac-btn";
      if (move_index === this.state.stepNumber){
        descStyle = "tictac-btn selected";
      }
      return (
        <button key={move} className={descStyle} onClick={() => this.jumpTo(move_index)}>{desc}</button>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Player: " + (this.state.xIsNext ? "X" : "O");
    }

    let historyOrderText;
    if (historyOrderDesending){
      historyOrderText = "Desc";
    } else {
      historyOrderText = "Asce";
    }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
      <div className="tictac">
        <div className="tictac-board">
          <div className="tictac-board-top">
            <p className="tictac-status">{status}</p>
          </div>
          <TicTacBoard
            squares={current.squares}
            onClick={(i,j) => this.handleHistoryClick(i,j)}
          />
        </div>
        <div className="tictac-history">
          <button className="tictac-btn status" onClick={() => this.toggleHistoryOrder()}>{historyOrderText}</button>
          {moves}
        </div>
      </div>
    );
  }
}

export default TicTac;