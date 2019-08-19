import React, { Component } from 'react';


class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {my_value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ my_value: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name has been submitted. The name ' + this.state.my_value);
    }

    render() {
        const my_value = this.state.my_value;
        return (
            <form>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={my_value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
        );
    }
}

export default NameForm;