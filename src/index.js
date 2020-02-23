import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './Game';

// function component
// class Square extends React.Component {
    export function Square(props) {
      return (
        <button className="square" 
            onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );



  export function calculateWinner(squares) {
      const lines = [ //winning lines
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++){
          const [a, b, c] = lines[i];
          if (squares[a] 
            && squares [a] === squares[b] 
            && squares [a] === squares[c]) {
                return squares[a]
            }
      }
      return null;
  }
  