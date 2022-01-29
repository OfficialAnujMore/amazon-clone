export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log("Action", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // ADD TO basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return { state };

    default:
      return state;
  }
};

export default reducer;
