import React, { Component } from 'react';

class Bindings extends Component {
    constructor() {
        super();
        this.onClickMe = this.onClickMe.bind(this);
    }
    onClickMe() {
        console.log(this);
    }

    render() {
        return (
            <button
                onClick={this.onClickMe}
                type="button"
                className='btn btn-block btn-primary'
            >
                Click Me
            </button>
        );
    }
}

export default Bindings;

