const productLoader = async (params) => {
    const id = params.params.id;
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok || response.status !== 200) {
            throw new Error(response.statusText);
        }

        const product = await response.json();
        const productCategory = product.category;

        const productsResponse = await fetch(
            `https://dummyjson.com/products/category/${productCategory}`
        );
        if (!productsResponse.ok || productsResponse.status !== 200) {
            throw new Error(productsResponse.statusText);
        }

        const productData = await productsResponse.json();


        return { product, productData };
    } catch (error) {
        console.log(error);
    }
};

export default productLoader;
