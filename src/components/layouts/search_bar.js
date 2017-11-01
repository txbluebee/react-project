import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={this.props.placeholders} />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go</button>
                        </span>
                    </div>    
                </div>    
            </div>
        );
    }
}

export default SearchBar;