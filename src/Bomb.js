// your Bomb code here!
import React from "react";


class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render(){
        if (this.props.initialCount > 0) {
            return `${this.props.initialCount} seconds left before I go boom!`;
        }
        else {
            return 'Boom!';
        }
    }
}

export default Bomb;