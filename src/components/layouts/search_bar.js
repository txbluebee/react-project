import React from 'react';


class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {term: ''};
    }

    onInputChange(event){
        this.setState({ term: event.target.value});
    }

    onSubmitForm(event){
        event.preventDefault();
        this.props.fetchData(this.state.term);
    }
    render() {
        return (
            <div className="row d-flex justify-content-center my-4">
                <div className="col-lg-6">
                    <form onSubmit={this.onSubmitForm.bind(this)}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.term}
                                placeholder={this.props.placeholder} 
                                onChange={this.onInputChange.bind(this)} />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">Go</button>
                            </span>
                        </div>    
                    </form>    
                </div>    
            </div>
        );
    }
}

export default SearchBar;