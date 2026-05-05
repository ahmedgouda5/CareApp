import { Button } from "../ui/button";

export default function ProfileInfo() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Profile Information
        </h2>

        <Button className="text-sm px-4 py-2 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
          Edit Profile
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-lg">
            DA
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Dr. Ahmed Salem
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              dr.ahmed@pharmacarepro.com
            </p>

            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
              • Pharmacist Admin
            </span>
          </div>
        </div>

        <button className="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Change Photo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            First Name
          </label>
          <input
            type="text"
            defaultValue="Ahmed"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Salem"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            defaultValue="dr.ahmed@pharmacarepro.com"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Phone
          </label>
          <input
            type="text"
            defaultValue="+20 100 123 4567"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            License Number
          </label>
          <input
            type="text"
            defaultValue="EGY-PHARM-28441"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Specialization
          </label>
          <input
            type="text"
            defaultValue="Clinical Pharmacy"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
