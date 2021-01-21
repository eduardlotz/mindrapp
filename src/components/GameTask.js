import React, { Component } from 'react'

export default class GameTask extends Component {
    render() {

        return (
            <div className="d-flex flex-column w-100">
                <span className="timer-progressbar">
                    <span className="progress" style={{width: this.props.timer.left}}></span>
                </span>

                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="task-text">{this.props.task}</h2>

                    <div className="round-counter ml-3">
                        <h2 className="current">{this.props.round.current}</h2>
                        <h3 className="total">/{this.props.round.total}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
