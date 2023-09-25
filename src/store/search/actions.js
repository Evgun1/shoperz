import { searchcAtions } from './search';

export function searchProducts(search) {
    return async (dispatch) => {
        // if (!search || !search.length) {
        //     dispatch(searchcAtions.update(null));
        //     return;
        // }

        // const response = await fetch(
        //     'https://dummyjson.com/products/search?q=' + search
        // );

        // if (response.ok && response.status === 200) {
        //     const { products } = await response.json();

        //     dispatch(searchcAtions.update(products));
        // }

        if (search) {
            const response = await fetch(
                'https://dummyjson.com/products/search?q=' + search
            );

            if (response.ok && response.status === 200) {
                const { products } = await response.json();

                dispatch(searchcAtions.update(products));
            }
        } else {
            dispatch(searchcAtions.update(null));
        }
    };
}
