import React from 'react';
import { Link } from 'react-router-dom';

export default function(props){
    return (
        <div className="col">
            <Link to={props.path}>
                <div className="card">
                    <img className="card-img-top"  src={props.imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}