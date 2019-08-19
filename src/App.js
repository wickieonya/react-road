import React, { Component } from 'react';

const my_list = [
    {
        title: 'Road to react- 2019',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 103,
        points: 400,
        object_id: 0
    },
    {
        title: 'React devs in Kenya',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 103,
        points: 400,
        object_id: 2
    },
    {
        title: 'React makes me happy.',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 103,
        points: 400,
        object_id: 3
    },
    {
        title: 'Just another indication that this is the thing.',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 103,
        points: 400,
        object_id: 4
    }
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            my_list,
        };
    }

    render() {
        return (
            <div className='container'>
                { this.state.my_list.map( (item) => {
                    return (
                        <div key={item.object_id} className='jumbotron'>
                            <span> <a href={ item.url }> { item.title } </a></span>&nbsp;
                            <span>Author: { item.author }</span>&nbsp;
                            <span>Commnents: { item.num_comments }</span>&nbsp;
                            <span>Points: { item.points }</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;