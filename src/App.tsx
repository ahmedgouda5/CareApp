import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./(Pages)/Product";
import Dashboard from "./(Pages)/Dashboard";
import Layout from "./Shared/Components/Layout";
import Inventory from "./(Pages)/Inventory";
import Orders from "./(Pages)/Orders";
import Customers from "./(Pages)/Customers";
import Suppliers from "./(Pages)/Suppliers";
import Settings from "./(Pages)/Settings";
import Reports from "./(Pages)/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
