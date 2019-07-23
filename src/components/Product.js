import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                <img alt="nokia 3" src="./img/nokia3.jpg" />
                    <div className="caption">
                        <h3>Nokia 3</h3>
                        <p>
                        IDR 2.000.000
                        </p>
                    </div>
                    
                    <button type="button" className="btn btn-success">Purchase</button>
                    
                </div>
            </div>    
        );
    }
}

export default Product;