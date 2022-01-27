import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = {
    cardItems: []
}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { cardItems: [...state.cardItems, action.data] };
        case REMOVE_TO_CART:
            state.cardItems.pop()
            return { cardItems: [...state.cardItems] };

        default:
            return state;

    }
}