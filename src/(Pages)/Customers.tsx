import { useState } from "react";
import CustomerTable from "../components/Cusomers/CustomerTable";
import CustomerDetail from "../components/Cusomers/CustomerDetails";
import OrderHistory from "../components/Cusomers/OrderHistory";
import { customers } from "../data/data";

export default function CustomerPage() {
  const [selected, setSelected] = useState(customers[0]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <nav className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Customer Management</h1>
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
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5 items-start">
        <section className="h-[calc(100vh-3rem)] min-h-[480px]">
          <CustomerTable selected={selected} onSelect={setSelected} />
        </section>

        <section className="flex flex-col gap-4">
          <CustomerDetail customer={selected} />
          <OrderHistory />
        </section>
      </section>
    </main>
  );
}
