export const initialState = {
  basket: [
    {
      id: "12113",
      title:
        "OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking, 5ATM+Water & Dust Resistant( Android & iOS Compatible)",
      price: 1799.0,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL450_SR450,320_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => {
  // console.log(basket?.reduce((amount, item) => item.price + amount, 0));
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log("Action", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // ADD TO basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      console.warn("Cant find product with ID", action.item.id, ".");

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant find product with ID", action.id, ".");
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
