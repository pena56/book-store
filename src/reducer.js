export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => (
  cart?.reduce((amount, item) => item.price + amount, 0).toFixed(2)
)

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
}

export default reducer;
