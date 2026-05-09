import { Skeleton } from "./ui/skeleton";

export function GenericPageSkeleton() {
  return (
    <div className="space-y-4 bg-gray-100 dark:bg-gray-800">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function ChartSkeleton({
  heightClass = "h-[400px]",
}: {
  heightClass?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="space-y-2 bg-gray-100 dark:bg-gray-800">
        <Skeleton className="h-6 w-56" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className={`mt-6 w-full ${heightClass}`} />
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
}

export function DashboardPageSkeleton() {
  return (
    <div className="space-y-6 bg-gray-100 dark:bg-gray-800">
      <div className="space-y-2">
        <Skeleton className="h-8 w-72" />
        <Skeleton className="h-5 w-80" />
      </div>
      <div className="grid gap-4 md:grid-cols-4 bg-gray-100 dark:bg-gray-800">
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-36 w-full" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 bg-gray-100 dark:bg-gray-800">
        <ChartSkeleton />
        <ChartSkeleton heightClass="h-[320px]" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 bg-gray-100 dark:bg-gray-800">
        <TableSkeleton />
        <TableSkeleton />
      </div>
    </div>
  );
}
