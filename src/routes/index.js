import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/Productpage/ProductPage";

export const routes = [{
    path: '/',
    page: Homepage
}, {
    path: '/products',
    page: ProductPage
}, {
    path: '/orders',
    page: OrderPage
},
]