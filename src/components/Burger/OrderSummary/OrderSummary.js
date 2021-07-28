import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Aaux from '../../../hoc/Aaux/Aaux';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aaux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button variant="outline-danger" onClick={this.props.purchaseCancelled}>CANCEL</Button>{' '}
                <Button variant="outline-success" onClick={this.props.purchaseContinued}>CONTINUE</Button>{' '}
            </Aaux>
        );
    }
}

export default OrderSummary;