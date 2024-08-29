// utils/stateProvider/state.js
const initialState = {
    navMenu: false,
    shopFiltersToggle: false,
    userProfile: false, // Assuming it should be false initially
    user: null,
    favorites: new Set(), // Initialize favorites as an empty Set
}

export default initialState;
