import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { useAuth } from "./store/auth.store";
import { useEffect } from "react";
import { useUser } from "./store/user.store";
import { Catalog } from "./pages/Catalog";
import { Order } from "./pages/Order";
import { ShippingAndPayment } from "./pages/ShippingAndPayment/ShippingAndPayment";
import { Contact } from "./pages/Contact/Contact";
import { Advantages } from "./pages/Advantages/Advantages";

function App() {
  const { getRefresh } = useAuth();
  const { getProfile } = useUser();
  const { user } = useAuth();

  let count = 0;

  useEffect(() => {
    if (count === 0 && localStorage.getItem("refreshToken")) {
      getRefresh();
      count++;
    }
  }, []);

  useEffect(() => {
    user && getProfile();
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/order" element={<Order />} />
      <Route path="/ship-and-pay" element={<ShippingAndPayment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/advantages" element={<Advantages />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
