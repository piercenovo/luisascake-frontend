import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    cleanCart: (state) => {
      state.quantity = 0
      state.products = []
      state.total = 0
    },
    getCartTotal: (state) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.quantity += amount;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.total = parseInt(total.toFixed(2));
      state.quantity = quantity;
    },
  }
})

export const { addProduct, cleanCart, getCartTotal } = cartSlice.actions
export default cartSlice.reducer
