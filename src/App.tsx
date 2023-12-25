import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { contextApi } from "./Context/Context";
import Home from "./All Components/Home";
import Menu, { MenuLoader } from "./All Components/Menu/Menu";
import Cart from "./All Components/Cart/Cart";
import Order, { OrderLoader } from "./All Components/Order/Order";
import CreateOrder, { Subbmiting } from "./All Components/Order/CreateOrder";
import AppLayout from "./All Components/Layout/AppLayout";
import Error from "./All Components/Layout/Error";
import "./App.css";
import { useState } from "react";
import { menus } from "./All Components/Menu/Menu";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: Subbmiting,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: OrderLoader,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState("");
  const[uname,setUname] = useState(false);
  const[item,setItem] = useState<menus[]>([])
  return (
    <contextApi.Provider value={{ user, setUser,uname,setUname,item,setItem }}>
      <RouterProvider router={router} />
    </contextApi.Provider>
  );
}

export default App;
