import { CategoryPie } from "../../components/charts/category-pie";
import { SalesChart } from "../../components/charts/sales-chart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <section className="mx-auto max-w-7xl space-y-1 pb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Key performance metrics for April 2026.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        <SalesChart />
        <CategoryPie />
      </section>
    </main>
  );
}
