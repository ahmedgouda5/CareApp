import { statusCls, dotCls } from "../../data/data";

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
        statusCls[status] ?? statusCls.Inactive
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          dotCls[status] ?? dotCls.Inactive
        }`}
      />
      {status}
    </span>
  );
}

export default StatusBadge;
