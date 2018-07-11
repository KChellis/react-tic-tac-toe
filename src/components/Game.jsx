import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CalculateWinner from './CalculateWinner';
import Board from './Board';
import Square from './Square';

class Game extends React.Component {


  handleClick(i) {
    const current = this.props.history[this.props.stepNumber];
    const squares = current.squares;
    const winner = CalculateWinner(squares);
    const { dispatch } = this.props;
    if(winner || squares[i]){
      return;
    }
    let player = 'X';
    if(!this.props.xIsNext){
      player = 'O';
    }
    let action1 = {
      type: 'MARK_TURN',
      player: player,
      index: i,
      turn: this.props.stepNumber + 1
    }
    dispatch(action1);
    let action2 = {
      type: 'RECORD_TURN',
      turn: this.props.stepNumber + 1
    }
    dispatch(action2);
    let action3 = {
      type: 'SWITCH_PLAYER',
      xIsNext: !this.props.xIsNext
    }
    dispatch(action3);
  }

  jumpTo(step) {
    const { dispatch } = this.props;
    let action = {
      type: 'RECORD_TURN',
      turn: parseInt(step)
    }
    dispatch(action);
  }

  render() {
    const current = this.props.history[this.props.stepNumber];
    const squares = current.squares;
    const winner = CalculateWinner(squares);

    const moves = Object.keys(this.props.history).map(move =>  {
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
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game container">
        <style jsx>{`
          .game {
            display: flex;
            flex-direction: row;
          }

          .game-info {
            margin-left: 20px;
          }

          .status {
            margin-bottom: 10px;
          }
          ol, ul {
            padding-left: 30px;
          }
        `}</style>
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(i) => this.handleClick(i)}
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

Game.propTypes = {
  history: PropTypes.object,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext
  };
};

export default withRouter(connect(mapStateToProps)(Game));
