import React, { Component } from 'react';
import "../stylesheets/home.css";
import Logo from "./Logo";

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Logo color="#F0F0F1" size="80" name={true}/>
                </nav>
            </div>
        )
    }
}

