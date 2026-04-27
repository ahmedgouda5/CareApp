# 💊 PharmaCare Pro — Pharmacy Management System

A modern, full-featured pharmacy management dashboard built with **React 19**, **TypeScript**, **Vite**, and a carefully selected UI/state stack. Converted from a static HTML prototype into a scalable, component-driven SPA.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | React 19 | UI rendering |
| Language | TypeScript 6 | Type safety |
| Bundler | Vite 8 | Dev server & build |
| Routing | React Router DOM v7 | SPA navigation |
| State | Redux Toolkit v2 | Global app state |
| Forms | React Hook Form + Zod (via resolvers) | Form handling & validation |
| Tables | TanStack Table v8 | Sortable, filterable data grids |
| Charts | Recharts v3 | Revenue, sales & analytics charts |
| UI Primitives | Radix UI | Accessible unstyled components |
| Component Library | shadcn/ui | Pre-built Radix-based components |
| Styling | Tailwind CSS v4 | Utility-first CSS |
| Styling Utils | clsx + tailwind-merge + CVA | Conditional class management |
| Drag & Drop | @dnd-kit/core + sortable | Inventory reordering |
| Icons | Lucide React + Tabler Icons | Icon sets |
| Fonts | Geist Variable (@fontsource-variable) | Typography |
| Animations | tw-animate-css | Tailwind animation utilities |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/careapp.git
cd careapp
npm install
```

### Development

```bash
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build        # type-check + bundle
npm run preview      # preview production build locally
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
careapp/
├── public/
├── src/
│   ├── app/
│   │   └── store.ts                  # Redux store setup
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui base components (Button, Input, Dialog…)
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Topbar.tsx
│   │   │   └── AppLayout.tsx
│   │   ├── charts/
│   │   │   ├── SalesChart.tsx        # Recharts line chart
│   │   │   └── CategoryDonut.tsx     # Recharts doughnut chart
│   │   └── shared/
│   │       ├── StatCard.tsx
│   │       ├── DataTable.tsx         # TanStack Table wrapper
│   │       └── Badge.tsx
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.tsx
│   │   │   └── dashboardSlice.ts
│   │   ├── products/
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── ProductModal.tsx
│   │   │   └── productsSlice.ts
│   │   ├── orders/
│   │   │   ├── OrdersPage.tsx
│   │   │   ├── OrderDetailModal.tsx
│   │   │   └── ordersSlice.ts
│   │   ├── customers/
│   │   ├── inventory/
│   │   ├── suppliers/
│   │   ├── reports/
│   │   └── settings/
│   │
│   ├── hooks/
│   │   ├── useAppDispatch.ts
│   │   └── useAppSelector.ts
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── supplier.ts
│   │
│   ├── lib/
│   │   └── utils.ts                  # cn() helper (clsx + twMerge)
│   │
│   ├── router/
│   │   └── index.tsx                 # React Router v7 routes
│   │
│   ├── main.tsx
│   └── index.css                     # Tailwind v4 directives + CSS variables
│
├── components.json                   # shadcn/ui config
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Dashboard | KPI cards, charts, recent orders |
| `/products` | Products | Catalog table, add/edit modals |
| `/orders` | Orders | Order list, status tracking, receipt |
| `/customers` | Customers | Patient profiles & purchase history |
| `/inventory` | Inventory | Stock levels & expiry tracking |
| `/suppliers` | Suppliers | Supplier directory & management |
| `/reports` | Reports | Revenue analytics & comparisons |
| `/settings` | Settings | Account & pharmacy preferences |
| `/auth/login` | Login | Authentication page |
| `/auth/register` | Register | Registration page |

---

## 🏗️ Key Patterns

### State — Redux Toolkit slice

```ts
// src/features/products/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';

interface ProductsState {
  items: Product[];
  loading: boolean;
}

const initialState: ProductsState = { items: [], loading: false };

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
```

### Tables — TanStack Table v8

```tsx
// src/components/shared/DataTable.tsx
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(hg => (
          <tr key={hg.id}>
            {hg.headers.map(h => (
              <th key={h.id} onClick={h.column.getToggleSortingHandler()}>
                {flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Forms — React Hook Form + Zod

```tsx
// src/features/products/ProductModal.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  stock: z.number().min(0),
  price: z.number().positive(),
  category: z.string(),
});

type ProductForm = z.infer<typeof schema>;

export function ProductModal() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ProductForm) => {
    // dispatch to Redux or call API
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Product name" />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
    </form>
  );
}
```

### Styling — cn() utility

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage in components:
// <div className={cn('px-4 py-2', isActive && 'bg-emerald-600', className)} />
```

---

## 🎨 Design Tokens

Defined as CSS custom properties in `src/index.css`:

```css
:root {
  --navy:          #0A1628;
  --emerald:       #059669;
  --emerald-light: #10b981;
  --gold:          #C9961A;
  --danger:        #dc2626;
}
```

---

## ✨ Features

- **Dashboard** — KPI stat cards, weekly revenue/orders chart (Recharts), category donut, low-stock alerts panel
- **Products** — TanStack Table with sort/filter, add/edit modal with Zod-validated form
- **Orders** — Status-tracked order list, order detail modal, print receipt action
- **Customers** — Patient profiles with purchase history
- **Inventory** — Stock monitoring, expiry date alerts, drag-and-drop reordering (DnD Kit)
- **Suppliers** — Supplier directory with payment terms, lead times, add supplier form
- **Reports** — YoY revenue comparison chart, sales performance metrics
- **Auth** — Login & Register pages
- **Settings** — Pharmacy & account preferences

---

## 📄 License

MIT — free to use, modify, and distribute.
