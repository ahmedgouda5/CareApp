import { useState } from "react";
import CustomerTable from "../components/Cusomers/CustomerTable";
import CustomerDetail from "../components/Cusomers/CustomerDetails";
import OrderHistory from "../components/Cusomers/OrderHistory";
import { customers } from "../data/data";

export default function CustomerPage() {
  const [selected, setSelected] = useState(customers[0]);

  return (
    <main className="min-h-screen  ">
      <nav className="flex justify-between mb-6">
        <div>
          <h1 className="font-bold">Customer Management</h1>
          <p className="text-gray-500">
            {customers.length} registered patients
          </p>
        </div>
        <div>
          <button className="px-3 py-1 rounded bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
            + Add Customer
          </button>
        </div>
      </nav>
      <section className=" dark:bg-gray-900  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        <section className="md:col-span-1">
          <CustomerTable selected={selected} onSelect={(c) => setSelected(c)} />
        </section>

        <section className="flex flex-col gap-7 md:col-span-2 justify-between  h-full ">
          <CustomerDetail customer={selected} />
          <OrderHistory />
        </section>
      </section>
    </main>
  );
}
