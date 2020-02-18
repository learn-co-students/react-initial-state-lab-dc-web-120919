import React, {Component} from 'react';

class Bomb extends Component{

    constructor(bombStart){
        super();
        this.state = {
            secondsLeft: bombStart.initialCount, //bombStart is equal to props here 
        }
    }

    render = () => {
        return (
        (this.state.secondsLeft===0)? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }
}


export default Bomb;