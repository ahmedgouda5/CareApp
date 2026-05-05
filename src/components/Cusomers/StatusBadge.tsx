import { statusCls, dotCls, type status } from "../../data/data";

const safeStatus = (status: string): status => {
  return status in statusCls ? (status as status) : "Inactive";
};

function StatusBadge({ status }: { status: string }) {
  const s = safeStatus(status);

  return (
    <span className={statusCls[s]}>
      <span className={dotCls[s]} />
      {s}
    </span>
  );
}

export default StatusBadge;
