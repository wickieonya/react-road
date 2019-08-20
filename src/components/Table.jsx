import React from 'react';
import Button from './Button';


// const is_searched = search_term => item => 
//     item.title.toLowerCase().includes(search_term.toLowerCase());


const Table = ({ result, pattern, onDismiss }) => 
<div className="container">

    <h4 className="leads">Search results for: { pattern } </h4>

    { console.log('pattern', pattern)}
    { console.log('result', result)}
 
    {console.log('results kk', Array.isArray(result) )}
    
    { result.map(item => 
        <div key={item.objectID} className="card mb-4">
            <div className="card-body">
                <span><a href={item.url}> {item.title}</a></span> &nbsp;/&nbsp;
                <span>Author: {item.author} </span> &nbsp;/&nbsp;
                <span> <i> Published: {item.created_at} </i></span>
                <br/>
                <span><i>Comments: </i>{item.num_comments}</span> &nbsp;/&nbsp;
                <span> Points:<i> {item.points}</i> </span> &nbsp;/&nbsp;
                <span>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="btn btn-danger btn-sm"
                    >Dismiss Article</Button>
                </span>
            </div>
        </div>
    )}
</div>;

export default Table;