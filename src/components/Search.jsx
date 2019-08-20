import React from 'react';

const Search = ({ 
    value, 
    onChange, 
    onSubmit, 
    children 
}) =>
    <form className='form' onSubmit={onSubmit}>
        <div className="form-group">
            <input 
                type="text"
                value={value}
                onChange={onChange}
                placeholder='Input your search query here.'
                className='form-control'
            />
            <button
                type="submit"
                onClick={onSubmit}
                >
                {children}
            </button>
        </div>
    </form>
    



export default Search;