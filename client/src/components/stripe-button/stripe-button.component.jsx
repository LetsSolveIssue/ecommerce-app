import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { clearCart } from '../../redux/cart/cart.actions';

axios.defaults.baseURL = 'http://localhost:5000';

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QrCeYaZIoy1mSyx3aNQxQtHD00VpUAZ3WI';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
        clearCart()
        history.push('/shop');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing App.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      curreny='INR'
    />
  );
};

const mapDispatchToProps = {
  clearCart
}

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);