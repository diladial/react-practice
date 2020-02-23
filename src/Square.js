import React from 'react';
// function component
// class Square extends React.Component {
export function Square(props) {
    return (<button className="square" onClick={props.onClick}>
        {props.value}
    </button>);
}
