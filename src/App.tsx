import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Shared/Components/Layout";
import { NotFound } from "./(Pages)/NotFound";

const Product = lazy(() => import("./(Pages)/Product"));
const Dashboard = lazy(() => import("./(Pages)/Dashboard"));
const Inventory = lazy(() => import("./(Pages)/Inventory"));
const Orders = lazy(() => import("./(Pages)/Orders"));
const Customers = lazy(() => import("./(Pages)/Customers"));
const Suppliers = lazy(() => import("./(Pages)/Suppliers"));
const Settings = lazy(() => import("./(Pages)/Settings"));
const Reports = lazy(() => import("./(Pages)/Reports"));
const Auth = lazy(() => import("./(Pages)/Auth/Login"));

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
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/auth/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
