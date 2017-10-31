import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';

class PostsNew extends React.Component{

    renderField(field){
        const { error, touched } = field.meta;
        const className = `form-control ${ touched && error? 'is-invalid':''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className={className}
                    name={field.name} 
                    type={field.type} 
                    {...field.input} />
                <div className="text-danger">{ touched? error: ""}</div>   
            </div>
        );
    }

    renderTextarea(field){
        const { touched, error} = field.meta;
        const className = `form-control ${ touched && error? 'is-invalid':''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea 
                    className={className}
                    name={field.name} 
                    type={field.type} 
                    rows="3"
                    {...field.input} />  
                <div className="text-danger">{touched? error:''}</div>       
            </div>
        );
    }

    onSubmitForm(values){
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Header title="Blog Post"/>
                <Navbar />
                <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                    <Field 
                        label="Title"
                        name="title"
                        type="text"
                        component={this.renderField} />    
                    <Field 
                        label="Categories"
                        name="categories"
                        type="text"
                        component={this.renderField} />    
                    <Field 
                        label="Content"
                        name="content"
                        type="text"
                        component={this.renderTextarea} />    
                    <button type="submit" className="btn btn-outline-primary">Add</button>
                    <Link className="btn btn-outline-info ml-3" to="/posts">Cancel</Link>       
                </form>  
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title){
        errors.title = "Please enter title";
    }
    if (!values.categories){
        errors.categories = "Please enter categories";
    }
    if (!values.content){
        errors.content = "Please enter content";
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);