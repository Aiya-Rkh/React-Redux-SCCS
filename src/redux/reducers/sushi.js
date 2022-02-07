const INIT_STATE = {
  items: [],
  isLoaded: false,
};

const sushi = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_SUSHI":
      return { ...state, items: action.payload, isLoaded: true };
  }
  return state;
};

export default sushi;
