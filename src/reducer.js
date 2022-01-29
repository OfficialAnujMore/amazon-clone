export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // ADD TO basket
      break;

    case "REMOVE_FROM_BASKET":
      break;

    default:
      return state;
  }
};

export default reducer;
