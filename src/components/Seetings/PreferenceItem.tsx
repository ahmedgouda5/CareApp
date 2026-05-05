function PreferenceItem({
  title,
  desc,
  enabled,
}: {
  title: string;
  desc: string;
  enabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
      </div>

      <div
        className={`relative w-11 h-6 rounded-full transition ${
          enabled
            ? "bg-green-600 dark:bg-green-500"
            : "bg-gray-300 dark:bg-gray-700"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
            enabled ? "right-0.5" : "left-0.5"
          }`}
        />
      </div>
    </div>
  );
}

export default PreferenceItem;
