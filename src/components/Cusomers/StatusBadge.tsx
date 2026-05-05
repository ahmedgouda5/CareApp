import { statusCls, dotCls, type status } from "../../data/data";

const safeStatus = (status: string): status => {
  return status in statusCls ? (status as status) : "Inactive";
};

function StatusBadge({ status }: { status: string }) {
  const s = safeStatus(status);

  return (
    <span
      className={`${statusCls[s]} text-center items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold`}
    >
      <span className={dotCls[s]} />
      {s}
    </span>
  );
}

export default StatusBadge;
