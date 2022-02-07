const INIT_STATE = {
  category: null,
  sortBy: "popular",
};

const filters = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
  }
  return state;
};

export default filters;
