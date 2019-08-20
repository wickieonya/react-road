import React from 'react';

const Search = ({ 
    value, 
    onChange, 
    onSubmit, 
    children 
}) =>
        <div className="row container">
            <div className="col-md-12">
                <form onSubmit={onSubmit} className="form">
                    <div className="input-group">
                    <input 
                        type="text"
                        name="search"
                        value={value}
                        onChange={onChange}
                        placeholder='Input your search query here.'
                        className='form-control'
                    />
                    <span className="input-group-btn">
                        {children}
                        <input 
                            type="submit"
                            name="submitSearch"
                            value="Search"
                            className="btn btn-outline-info"
                            onClick={onSubmit}
                        />
                    </span>
                    </div>
                </form>
            </div>
        </div>    



export default Search;