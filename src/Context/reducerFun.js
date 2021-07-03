export function reducerFunc(state, action) {
  switch (action.type) {
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: "",
        filterSize: [],
        filterBrand: [],
        filterSex: []
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: "HIGH_TO_LOW"
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: "LOW_TO_HIGH"
      };
    case "FILTER_SIZE":
      return state.filterSize.includes(action.payload)
        ? {
            ...state,
            filterSize: state.filterSize.filter(
              (item) => item !== action.payload
            )
          }
        : {
            ...state,
            filterSize: state.filterSize.concat(action.payload)
          };
    case "FILTER_BRAND":
      return state.filterBrand.includes(action.payload)
        ? {
            ...state,
            filterBrand: state.filterBrand.filter(
              (item) => item !== action.payload
            )
          }
        : {
            ...state,
            filterBrand: state.filterBrand.concat(action.payload)
          };
    case "FILTER_SEX":
      return state.filterSex.includes(action.payload)
        ? {
            ...state,
            filterSex: state.filterSex.filter((item) => item !== action.payload)
          }
        : {
            ...state,
            filterSex: state.filterSex.concat(action.payload)
          };
    default:
      return state;
  }
}
