import React, { Component } from 'react'
import Cell from './Cell'

export default class Row extends Component {
    render() {
        return (
            <div className="gridrows">
                {this.props.value.map((value,index)=>(
                    <Cell
                        key={index}
                        colIndex={index}
                        value={value}
                        rowIndex={this.props.rowIndex}
                        handleCellClick={this.props.handleCellClick}
                    />
                ))}
            </div>
        )
    }
}

