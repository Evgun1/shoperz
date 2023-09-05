const categoryLoader = async (params) => {
    const slug = params.params.slug;
    try {
        const response = await fetch(
            `https://dummyjson.com/products/category/${slug}`
        );
        if (!response.ok || response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {}
};

export default categoryLoader;
