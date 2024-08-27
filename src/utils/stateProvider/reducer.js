// utils/stateProvider/reducer.js
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAV_MENU":
            return { ...state, navMenu: !state.navMenu };
        case "SHOP_FILTERS_TOGGLE":
            return { ...state, shopFiltersToggle: !state.shopFiltersToggle };
        case "CHANGE_USER_PROFILE":
            return { ...state, userProfile: !state.userProfile };
        case "SET_USER":
            return { ...state, user: action.user, userProfile: true };
        default:
            return state;
    }
}

export default reducer;
