import { init } from './wishlist';

export function fetchWishList() {
    return async (dispatch) => {
        const response = await fetch(
            'https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app/HomePage/wishlist.json'
        );

        if (response.ok && response.status === 200) {
            const data = await response.json();
            dispatch(init(data));
        }
    };
}
