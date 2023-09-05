import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Shop from '../components/Pages/Shop/Shop';
import Category from '../components/Pages/Category/Category';
import Product from '../components/Pages/Product/Product';
import NotFound from '../components/Pages/NotFound/NotFound';
import App from '../App';
import productLoader from './poductLoader';
import categoryLoader from './categoryLoader';

export const routerConfig = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,

        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'category/:slug',
                element: <Category />,
                loader: categoryLoader,
            },
            {
                path: 'product/:id',
                element: <Product />,
                loader: productLoader,
            },
        ],
    },
];

const router = createBrowserRouter(routerConfig);

export default router;
