import React from 'react';
import { calculateWinner } from "./calculateWinner";
import { Board } from "./Board";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            currentPosition: null,
            currentColumn: null,
            currentRow: null,
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return; // id ont get this condition
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            currentPosition: i,
            currentColumn: this.getCurrentColumn(i),
            currentRow: this.getCurrentRow(i),
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            currentPosition: i,
            currentColumn: this.getCurrentColumn(i),
            currentRow: this.getCurrentRow(i),
        });
    }

    getCurrentRow(currentPosition) {
        if ([0, 1, 2].includes(currentPosition))
        return 1;
        else if ([4, 5, 6].includes(currentPosition))
        return 2;
        else
        return 3;
    }

    getCurrentColumn(currentPosition) {
        if ([0, 3, 6].includes(currentPosition))
        return 1;
        else if ([1, 4, 7].includes(currentPosition))
        return 2;
        else
        return 3;
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (<li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}
                </button>
            </li>);
        });
        const row1 = [0, 1, 2];
        const squaresArray = `Squares array: ${current.squares}`;
        const positionString = `Current move position: ${this.state.currentPosition + 1}`;

        // const currentRow = `Current row: ${this.state.currentPosition.filter(x => [0, 1, 2].includes(x))}`;
        // const currentRow = this.getCurrentRow(this.state.currentPosition);
        // const currentColumn = this.getCurrentColumn(this.state.currentPosition);

        const currentRowString = `Current row: ${this.state.currentRow}`;
        const currentColString = `Current row: ${this.state.currentColumn}`;

        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        }
        else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }
        return (<div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                <div>{squaresArray}</div>
                <div>{positionString}</div>
                <div>{currentRowString}</div>
                <div>{currentColString}</div>
            </div>
        </div>);
    }
}
