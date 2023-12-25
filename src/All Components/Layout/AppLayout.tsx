import Header from "./Header";
import CartFooter from "../Cart/CartFooter";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";


const AppLayout = () => {
  const navigate = useNavigation();

  const isLoading = navigate.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      {isLoading ? <Loader /> : <Outlet />}
      <CartFooter />
    </div>
  );
};

export default AppLayout;
