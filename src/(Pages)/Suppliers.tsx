import StatusBadge from "../components/Cusomers/StatusBadge";

const Suppliers = () => {
  return (
    <main>
      <nav className="flex justify-between mb-5">
        <div>
          <h3 className="font-bold">Supplier Management</h3>
          <p className="text-gray-500">14 active suppliers</p>
        </div>
        <div>
          <button className="px-3 py-1 rounded bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
            + Add Supplier
          </button>
        </div>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-2 space-y-3 shadow-lg"
          >
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-green-400/30 p-2 rounded">NP</span>
                <div>
                  <h4>NilePharma Co.</h4>
                  <p className="text-sm text-gray-400">
                    Antibiotics & Generics · Cairo, Egypt
                  </p>
                </div>
              </div>
              <StatusBadge status="Active" />
            </nav>
            <section className="flex justify-between items-center  px-6 my-5">
              <div className="flex flex-col items-center rounded-md px-7 py-1 bg-gray-200 dark:bg-gray-600">
                <h4 className="text-bold">284</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  orders{" "}
                </p>
              </div>
              <div className="flex flex-col items-center rounded-md px-7 py-1 bg-gray-200 dark:bg-gray-600">
                <h4 className="text-green-600 text-bold">4.8★</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  Rating
                </p>
              </div>
              <div className="flex flex-col items-center rounded-md px-7 py-1 bg-gray-200 dark:bg-gray-600">
                <h4 className="text-bold">3d</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  Lead time
                </p>
              </div>
            </section>
            <footer className="flex gap-2">
              <button className="border border-gray-400 rounded-md px-3 py-1">
                Contact
              </button>
              <button className="border  border-gray-400 rounded-md px-3 py-1">
                Edit
              </button>
              <button className="border border-gray-500 dar rounded-md px-3 bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300">
                New PO
              </button>
            </footer>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Suppliers;
