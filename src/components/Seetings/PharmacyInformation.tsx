const PharmacyInformation = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Pharmacy Information
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Pharmacy Name
          </label>
          <input
            type="text"
            defaultValue="Al-Awadi Pharmacy"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            License No.
          </label>
          <input
            type="text"
            defaultValue="EGY-PHARM-28441"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Tax ID
          </label>
          <input
            type="text"
            defaultValue="421-542-911"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Address
          </label>
          <input
            type="text"
            defaultValue="6 October - Giza - Egypt"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PharmacyInformation;
