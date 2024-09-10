// utils/stateProvider/state.js

const initialState = {
    navMenu: false,
    shopFiltersToggle: true,
    filters: null, // Holds the selected filters
    filteredProducts: [], // Holds the filtered products
    filtered: false, // Assuming it should be false initially
    userProfile: false, // Assuming it should be false initially
    user: null,
    favorites: new Set(), // Initialize favorites as an empty Set
};

export const actionTypes = {
    SET_FILTERS: "SET_FILTERS",
    SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
    TOGGLE_SHOP_FILTERS: "TOGGLE_SHOP_FILTERS",
    CHANGE_NAV_MENU: "CHANGE_NAV_MENU",
    CHANGE_USER_PROFILE: "CHANGE_USER_PROFILE",
    SET_USER: "SET_USER",
    SET_FAVORITES: "SET_FAVORITES",
    TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

// Export them separately
export default initialState;
