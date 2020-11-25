import React from 'react';

function Card({ title, imageUrl, description, price, quantity }) {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <div className="col">
                        <p>Kaina: {price}€</p>
                    </div>
                    <div className="col">
                        <p>{quantity}vnt.</p>
                    </div>
                </div>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    )
}

export default Card;