import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { cartItems, data, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const styles = {
    cart: {
      marginTop: '10px',
      padding: '80px'
    },
    cartItemsTitle: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      alignItems: 'center',
      color: 'grey',
      fontSize: 'max(1vw, 12px)',
    },
    cartItemsItem: {
      margin: '10px 0px',
      color: 'black',
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      alignItems: 'center',
    },
    cartItemImg: {
      width: '50px',
    },
    cartHr: {
      height: '1px',
      backgroundColor: '#e2e2e2',
      border: 'none',
    },
    cross: {
      cursor: 'pointer',
    },
    cartBottom: {
      marginTop: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'max(12vw, 20px)',
      '@media (max-width: 750px)': {
        flexDirection: 'column-reverse',
      },
    },
    cartTotal: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    cartTotalDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#555',
    },
    cartTotalHr: {
      margin: '10px 0px',
      height: '1px',
      backgroundColor: '#e2e2e2',
      border: 'none',
    },
    cartTotalButton: {
      border: 'none',
      color: 'white',
      borderRadius: '4px',
      backgroundColor: 'tomato',
      width: 'max(12vw, 200px)',
      padding: '12px 0px',
      cursor: 'pointer',
    },
    cartPromocode: {
      flex: 1,
    },
    cartPromocodeP: {
      color: '#555',
    },
    cartPromocodeInput: {
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#eaeaea',
      justifyContent: 'space-between',
      borderRadius: '4px',
    },
    cartPromocodeInputField: {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '10px',
    },
    cartPromocodeButton: {
      width: 'max(10vw, 150px)',
      padding: '12px 5px',
      backgroundColor: 'black',
      border: 'none',
      color: 'white',
      borderRadius: '4px',
    },
  };

  // Media query handling for responsive design
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 750);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar/>
      <div style={styles.cart}>
        <div className="cart-items">
          <div style={styles.cartItemsTitle}>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr style={styles.cartHr} />
          {data.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div style={styles.cartItemsItem}>
                    <img src={item.image} alt="" style={styles.cartItemImg} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p 
                      onClick={() => removeFromCart(item._id)} 
                      style={styles.cross}
                    >
                      x
                    </p>
                  </div>
                  <hr style={styles.cartHr} />
                </div>
              );
            }
          })}
        </div>
        <div style={{
          ...styles.cartBottom,
          ...(isMobile ? { flexDirection: 'column-reverse' } : {})
        }}>
          {/* SWAPPED ORDER: Cart Totals first, then Promo Code */}
          <div style={styles.cartTotal}>
            <h2>Cart Totals</h2>
            <div>
              <div style={styles.cartTotalDetails}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr style={styles.cartTotalHr} />
              <div style={styles.cartTotalDetails}>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr style={styles.cartTotalHr} />
              <div style={styles.cartTotalDetails}>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button 
              onClick={() => navigate('/order')} 
              style={styles.cartTotalButton}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div style={styles.cartPromocode}>
            <p style={styles.cartPromocodeP}>If you have a promo code, Enter it here</p>
            <div style={styles.cartPromocodeInput}>
              <input 
                type="text" 
                placeholder="promo code" 
                style={styles.cartPromocodeInputField}
              />
              <button style={styles.cartPromocodeButton}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;