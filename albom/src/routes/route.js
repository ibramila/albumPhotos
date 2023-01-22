//! MAIN  PART
import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home";
import Add from "../pages/Add";
export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "add",
                element: <Add />
            }, {

            }
        ]
    }
];