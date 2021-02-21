import React, { Component } from 'react'

export default class Cell extends Component {
    render() {
        return (
            <div className="cell gridrows" onClick={(event)=>this.props.handleCellClick(event,this.props.rowIndex,this.props.colIndex)}>
                <h2>{this.props.value}</h2>
            </div>
        )
    }
}

