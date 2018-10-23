import React, { Component} from 'react';
import './famous.css';

class Famous extends Component {
    constructor(props) {
        super(props);
        this.state = {person: '', roll: ''};
    }

    handleChange=(event)=> {
        // console.log(event.target.value);
        this.setState({person: event.target.value});
    }

    handleChangeRoll=(event)=> {
        // console.log(event.target.value);
        this.setState({roll: event.target.value});
    }

    clicked=(event)=> {
        console.log(this.state)
    }

    render() {
        return (
        <div className="Famous">
            <header className="Famous-header">
                List Famous People
                <input onChange={this.handleChange} placeholder='name'/>
                <input onChange={this.handleChangeRoll} placeholder='role'/>
                <button onClick={this.clicked}>Submit</button>
                    {this.state.person} is a {this.state.roll}
            </header>
        </div>
        )
    }
}

export default Famous