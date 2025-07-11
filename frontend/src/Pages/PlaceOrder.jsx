import React from 'react';
import  StoreContext  from '../context/StoreContext';

const PlaceOrder = () => {
  // Mock function to simulate cart total calculation
  const getTotalCartAmount = () => {
    return 25.50; // Example cart total
  };

  const styles = {
    placeOrder: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      gap: '50px',
      marginTop: '100px'
    },
    placeOrderLeft: {
      width: '100%',
      maxWidth: 'max(30%, 500px)'
    },
    title: {
      fontSize: '30px',
      fontWeight: '600',
      marginBottom: '50px'
    },
    input: {
      marginBottom: '15px',
      width: '100%',
      padding: '10px',
      border: '1px solid #c5c5c5',
      borderRadius: '4px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    multiFields: {
      display: 'flex',
      gap: '10px'
    },
    placeOrderRight: {
      width: '100%',
      maxWidth: 'max(40%, 500px)'
    },
    cartTotal: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#f9f9f9'
    },
    cartTotalDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0'
    },
    cartTotalButton: {
      marginTop: '30px',
      width: '100%',
      padding: '12px',
      backgroundColor: '#ff6b35',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  };

  return (
    <div>
      <div style={styles.placeOrder}>
        <div style={styles.placeOrderLeft}>
          <p style={styles.title}>Delivery Information</p>
          <div style={styles.multiFields}>
            <input type="text" placeholder='First name' style={styles.input} />
            <input type="text" placeholder='Last Name' style={styles.input} />
          </div>
          <input type="email" placeholder='Email address' style={styles.input} />
          <input type="text" placeholder='Street' style={styles.input} />
          <div style={styles.multiFields}>
            <input type="text" placeholder='City' style={styles.input} />
            <input type="text" placeholder='State' style={styles.input} />
          </div>
          <div style={styles.multiFields}>
            <input type="text" placeholder='Zip code' style={styles.input} />
            <input type="text" placeholder='Country' style={styles.input} />
          </div>
          <input type="text" placeholder='Phone' style={styles.input} />
        </div>
        
        <div style={styles.placeOrderRight}>
          <div style={styles.cartTotal}>
            <h2>Cart Totals</h2>
            <div>
              <div style={styles.cartTotalDetails}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div style={styles.cartTotalDetails}>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div style={styles.cartTotalDetails}>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button style={styles.cartTotalButton}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;