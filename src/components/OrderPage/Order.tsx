import React, { useState, useMemo } from "react";
import StatsCard from "./Statscard";
import OrderFilters from "./Orderfilters";
import OrderTable from "./Ordertable";
import { orders as ALL_ORDERS, orderStats } from "./Type/Index";
import type { OrderStatus } from "./Type/Index";

const PAGE_SIZE = 6;

const OrdersPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All Status">(
    "All Status",
  );
  const [dateFilter, setDateFilter] = useState("Today");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_ORDERS.filter((o) => {
      const matchSearch =
        !q ||
        o.id.toLowerCase().includes(q) ||
        o.customer.name.toLowerCase().includes(q);
      const matchStatus =
        statusFilter === "All Status" || o.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };
  const handleStatus = (val: OrderStatus | "All Status") => {
    setStatusFilter(val);
    setPage(1);
  };
  const handleDate = (val: string) => {
    setDateFilter(val);
    setPage(1);
  };

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3">
          <StatsCard
            label="Total Orders"
            value={orderStats.total}
            valueColor="text-gray-900"
          />
          <StatsCard
            label="Pending"
            value={orderStats.pending}
            valueColor="text-amber-500"
          />
          <StatsCard
            label="Completed"
            value={orderStats.completed}
            valueColor="text-emerald-600"
          />
          <StatsCard
            label="Cancelled"
            value={orderStats.cancelled}
            valueColor="text-red-500"
          />
        </div>

        <OrderFilters
          search={search}
          onSearch={handleSearch}
          statusFilter={statusFilter}
          onStatusFilter={handleStatus}
          dateFilter={dateFilter}
          onDateFilter={handleDate}
        />

        <OrderTable
          orders={paginated}
          totalCount={filtered.length}
          page={page}
          pageSize={PAGE_SIZE}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => p + 1)}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
