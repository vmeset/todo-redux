import Login from "./pages/Login";
import Main from "./pages/Main";
import Buy from "./pages/Buy";
import Done from "./pages/Done";
import { DONE_ROUTE, LOGIN_ROUTE, TOBUY_ROUTE, TODO_ROUTE } from "./store/types";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]
export const privateRoutes = [
    {
        path: TODO_ROUTE,
        Component: Main
    },
    {
        path: TOBUY_ROUTE,
        Component: Buy
    },
    {
        path: DONE_ROUTE,
        Component: Done
    }
]