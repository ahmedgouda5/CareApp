import ExpiryAlerts from "../components/InventoryApp/ExpiryAlerts";
import InverntoryTable from "../components/InventoryApp/InverntoryTable";
import StockByCategory from "../components/InventoryApp/StockByCategory";
import StockTable from "../components/InventoryApp/StockTable";

const Inventory = () => {
  return (
    <main className="p-6 space-y-6">
      <nav className="flex justify-between ">
        <div>
          <h1 className="text-xl font-semibold">Inventory & Stock Control</h1>
          <p className="text-gray-500">Last updated: Today, 09:45 AM</p>
        </div>
        <div>
          <button className="px-4 py-2 rounded-full bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
            + Restock Record
          </button>
        </div>
      </nav>
      <section>
        <InverntoryTable />
      </section>
      <section className="">
        <StockTable />
      </section>

      {/* Right Side */}
      <section className="flex flex-col md:flex-row gap-6">
        <ExpiryAlerts />
        <StockByCategory />
      </section>
    </main>
  );
};

export default Inventory;
