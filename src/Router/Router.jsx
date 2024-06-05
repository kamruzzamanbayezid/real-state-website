import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "../Routes/PrivateRoute";
import EstateDetails from "../Components/Estates/EstateDetails";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayouts />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/updateProfile',
                        element: <PrivateRoute><UpdateProfile /></PrivateRoute>
                  },
                  {
                        path: '/estateDetails/:estateId',
                        loader: async () => await fetch('/estates.json'),
                        element: <EstateDetails />
                  }
            ],
      }
]);

export default router;