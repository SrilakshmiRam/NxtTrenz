// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const noOfItmsInTheCart = cartList.length

      let sumOfCartItemsPrice = 0
      cartList.forEach(each => {
        sumOfCartItemsPrice += each.price * each.quantity
      })

      return (
        <div className="summary-container">
          <h1 className="total-amountof-cartItems">
            Order Total:
            <span className="amount"> Rs {sumOfCartItemsPrice}/-</span>
          </h1>
          <p className="cartItemNumber">{noOfItmsInTheCart} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
