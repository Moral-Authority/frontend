import { actionTypes } from './state'; // Import actionTypes here

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTERS:
            return {
              ...state,
              filters: action.filters,
                filtered: false,
            };
        case actionTypes.SET_FILTERED_PRODUCTS:
            return {
              ...state,
              filteredProducts: action.filteredProducts,
                filtered: true,
            };
        case actionTypes.TOGGLE_SHOP_FILTERS:
            return { ...state, shopFiltersToggle: !state.shopFiltersToggle };
        case "CHANGE_NAV_MENU":
            return { ...state, navMenu: !state.navMenu };
        case "CHANGE_USER_PROFILE":
            return { ...state, userProfile: !state.userProfile };
        case "SET_USER":
            return { ...state, user: action.user, userProfile: true };
        case "SET_FAVORITES":
            return {
              ...state,
              favorites: new Set(action.favorites),
            };
        case "TOGGLE_FAVORITE":
            const updatedFavorites = new Set(state.favorites);
            if (updatedFavorites.has(action.productId)) {
                updatedFavorites.delete(action.productId);
            } else {
                updatedFavorites.add(action.productId);
            }
            return {
              ...state,
              favorites: updatedFavorites,
            };
        default:
            return state;
    }
};

export default reducer;
