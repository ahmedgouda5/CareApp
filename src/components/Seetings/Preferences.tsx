import PreferenceItem from "./PreferenceItem";

export default function Preferences() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Preferences
      </h2>

      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        <PreferenceItem
          title="Dark Mode"
          desc="Switch to dark interface"
          enabled={false}
        />

        <PreferenceItem
          title="Email Notifications"
          desc="Receive alerts for low stock & expiry"
          enabled={true}
        />

        <PreferenceItem
          title="SMS Alerts"
          desc="Critical stock alerts via SMS"
          enabled={true}
        />

        <PreferenceItem
          title="Auto-Reorder Suggestions"
          desc="AI-powered restock recommendations"
          enabled={true}
        />

        <PreferenceItem
          title="Two-Factor Authentication"
          desc="Enable 2FA for added security"
          enabled={false}
        />
      </div>
    </div>
  );
}
