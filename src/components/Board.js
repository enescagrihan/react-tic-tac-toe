import React, { Component } from 'react'
import Square from './Square'
import '../index.css'

class Board extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    squareRender(i) {
        return <Square onClick={() => this.clickHandler(i)} value={this.state.squares[i]}/>
    }
    
    clickHandler(i) {
        const squares = this.state.squares.slice();
        if(this.theWinner(this.state.squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    theWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    } 

    render() {
        let status = 'Next player: ' + (this.state.xIsNext?'X':'O');
        const winner = this.theWinner(this.state.squares);

        if(winner) {
            status = 'Winner: ' + winner; 
        }
        return (
            <div className="board">
                <h3>{status}</h3>
                <div className="square-row">
                    {this.squareRender(0)}
                    {this.squareRender(1)}
                    {this.squareRender(2)}
                </div>
                <div className="square-row">
                    {this.squareRender(3)}
                    {this.squareRender(4)}
                    {this.squareRender(5)}
                </div>
                <div className="square-row">
                    {this.squareRender(6)}
                    {this.squareRender(7)}
                    {this.squareRender(8)}
                </div>
            </div>
        )
    }
}

export default Board;