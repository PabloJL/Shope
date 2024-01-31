import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Account from "../Account";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../Components/Navbar";
import CheckOut from "../../Components/CheckOut";
import "./App.css";
import { CartProvider } from "../../Context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-orders/last" element={<MyOrder />} />
          <Route path="/my-orders/:id" element={<MyOrder />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
        <CheckOut />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
