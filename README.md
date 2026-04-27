<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0A1628,50:059669,100:0F2040&height=220&section=header&text=PharmaCare%20Pro&fontSize=42&fontColor=ffffff&desc=React%2019%20%7C%20Vite%20%7C%20TypeScript%20%7C%20Redux%20Toolkit%20%7C%20Supabase&descSize=17&descAlignY=72&descFontColor=6ee7b7" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=059669&center=true&vCenter=true&width=650&lines=Full-Stack+Pharmacy+Management+System;React+19+%2B+Vite+%2B+TypeScript;Redux+Toolkit+%7C+TanStack+Table+%7C+Recharts;shadcn%2Fui+%7C+Tailwind+CSS+v4+%7C+DnD+Kit;Figma-Driven+Component+Design" alt="Typing SVG" />
</p>

<p align="center">
  A beautifully designed, production-ready pharmacy management dashboard — built pixel-perfect from a Figma design file, converted from a polished HTML prototype into a fully typed React SPA.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-3.x-22c55e?style=for-the-badge&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [Design System](#-design-system)
- [Key Patterns](#-key-patterns)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**PharmaCare Pro** is a full-featured pharmacy management SPA built with **React 19 + Vite** on the frontend. Originally prototyped as a single-file HTML/CSS/JS dashboard, it has been re-architected into a scalable, component-driven codebase with full TypeScript coverage.

It features KPI dashboards, inventory tracking, order management, supplier directories, patient profiles, and in-depth analytics — all within a clean dark-navy / emerald design system.

```
Frontend  →  React 19 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui
State     →  Redux Toolkit (Feature Slice pattern)
Tables    →  TanStack Table v8
Charts    →  Recharts v3
Forms     →  React Hook Form + Zod
DnD       →  @dnd-kit/core + @dnd-kit/sortable
Routing   →  React Router DOM v7
Icons     →  Lucide React + Tabler Icons
Fonts     →  Geist Variable
```

---

## ✨ Features

### 📊 Dashboard
- KPI stat cards — Daily Revenue, Total Orders, Low Stock Alerts, Active Patients
- Weekly revenue & orders **dual-axis line chart** (Recharts)
- Sales category breakdown **doughnut chart**
- Recent orders table with live status badges
- Low stock alerts panel with expiry warnings

### 💊 Products
- Full catalog data grid powered by **TanStack Table v8** (sort, filter, paginate)
- Add / Edit product modal with **Zod-validated form** (name, category, supplier, price, stock, expiry)
- Stock level & expiry status indicators

### 🛒 Orders
- Order list with status tracking — Pending · Processing · Completed · Cancelled
- Order detail modal with line items, subtotal, and totals breakdown
- Print receipt & reorder actions

### 👥 Customers
- Patient profiles with demographics and purchase history
- Customer detail side panel

### 📦 Inventory
- Real-time stock level monitoring with color-coded thresholds
- Expiry date tracking with warning / danger badges
- **Drag-and-drop** inventory reordering via `@dnd-kit`

### 🏭 Suppliers
- Supplier directory with contact info, lead times, and payment terms
- Add Supplier modal — company, contact person, country, specialization, Net 30/60/COD terms

### 📈 Reports & Analytics
- YoY revenue comparison line chart
- Sales performance metrics by category and period

### 🔐 Authentication
- Login & Register pages
- Protected routes via React Router DOM v7 guards

### ⚙️ Settings
- Account profile & pharmacy preferences

---

## 🛠️ Tech Stack

### Frontend

| Package | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | `^19.2.5` | UI component library |
| [Vite](https://vitejs.dev/) | `^8.x` | Build tool & dev server |
| [TypeScript](https://www.typescriptlang.org/) | `~6.0.2` | Static type safety |
| [React Router DOM](https://reactrouter.com/) | `^7.14.2` | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | `^4.2.4` | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | `^4.4.0` | Accessible component system |
| [Radix UI](https://www.radix-ui.com/) | `^1.4.3` | Headless accessible UI primitives |
| [class-variance-authority](https://cva.style/docs) | `^0.7.1` | Component variant management |
| [clsx](https://github.com/lukeed/clsx) | `^2.1.1` | Conditional className utility |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^3.5.0` | Tailwind class conflict resolver |
| [tw-animate-css](https://github.com/new-divos/tw-animate-css) | `^1.4.0` | Tailwind animation utilities |
| [Redux Toolkit](https://redux-toolkit.js.org/) | `^2.11.2` | Global state management |
| [React Redux](https://react-redux.js.org/) | `^9.2.0` | React bindings for Redux |
| [React Hook Form](https://react-hook-form.com/) | `^7.74.0` | Performant form handling |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | `^3.10.0` | Zod ↔ React Hook Form adapter |
| [TanStack Table](https://tanstack.com/table/v8) | `^8.21.3` | Sortable, filterable data grids |
| [Recharts](https://recharts.org/) | `^3.8.0` | Revenue, sales & analytics charts |
| [@dnd-kit/core](https://dndkit.com/) | `^6.3.1` | Drag-and-drop core engine |
| [@dnd-kit/sortable](https://dndkit.com/) | `^10.0.0` | Sortable list / kanban support |
| [@dnd-kit/utilities](https://dndkit.com/) | `^3.2.2` | DnD helper utilities |
| [Lucide React](https://lucide.dev/) | `^1.8.0` | Clean, consistent icon set |
| [Tabler Icons](https://tabler.io/icons) | `^3.41.1` | Extended icon collection |
| [Geist Variable](https://vercel.com/font) | `^5.2.8` | Modern variable font |
| [@radix-ui/react-tabs](https://www.radix-ui.com/) | `^1.1.13` | Accessible tab primitives |
| [styled-components](https://styled-components.com/) | `^6.4.1` | CSS-in-JS for bespoke components |

### DevOps & Tooling

| Tool | Purpose |
|---|---|
| ESLint + TypeScript ESLint | Code linting with React Hooks rules |
| `eslint-plugin-react-refresh` | Fast Refresh lint rules |
| `@vitejs/plugin-react` | Vite React plugin |
| `@tailwindcss/vite` | Tailwind CSS Vite integration |
| GitHub Actions | CI/CD — lint, type-check, build |

---

## 📁 Project Structure

```
careapp/
│
├── public/
├── src/
│   ├── app/
│   │   └── store.ts                  # Redux store (combineReducers)
│   │
│   ├── assets/                       # Static assets (images, icons, fonts)
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── select.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx           # Dark navy navigation sidebar
│   │   │   ├── Topbar.tsx            # Search bar + action buttons
│   │   │   └── AppLayout.tsx         # Root shell with sidebar + main
│   │   ├── charts/
│   │   │   ├── SalesChart.tsx        # Recharts dual-axis line chart
│   │   │   └── CategoryDonut.tsx     # Recharts doughnut chart
│   │   ├── inventory/
│   │   │   └── DraggableItem.tsx     # @dnd-kit sortable inventory item
│   │   └── shared/
│   │       ├── StatCard.tsx          # KPI metric card
│   │       ├── DataTable.tsx         # TanStack Table wrapper
│   │       ├── StatusBadge.tsx       # Order / stock status chip
│   │       └── ConfirmDialog.tsx     # Delete confirmation modal
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.tsx
│   │   │   └── dashboardSlice.ts
│   │   ├── products/
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── ProductModal.tsx      # Add / edit with Zod validation
│   │   │   ├── columns.tsx           # TanStack column definitions
│   │   │   └── productsSlice.ts
│   │   ├── orders/
│   │   │   ├── OrdersPage.tsx
│   │   │   ├── OrderDetailModal.tsx
│   │   │   └── ordersSlice.ts
│   │   ├── customers/
│   │   │   ├── CustomersPage.tsx
│   │   │   └── customersSlice.ts
│   │   ├── inventory/
│   │   │   ├── InventoryPage.tsx     # DnD-enabled stock management
│   │   │   └── inventorySlice.ts
│   │   ├── suppliers/
│   │   │   ├── SuppliersPage.tsx
│   │   │   ├── AddSupplierModal.tsx
│   │   │   └── suppliersSlice.ts
│   │   ├── reports/
│   │   │   ├── ReportsPage.tsx
│   │   │   └── reportsSlice.ts
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── authSlice.ts
│   │   └── settings/
│   │       └── SettingsPage.tsx
│   │
│   ├── hooks/
│   │   ├── useAppDispatch.ts         # Typed Redux dispatch
│   │   └── useAppSelector.ts         # Typed Redux selector
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── order.ts
│   │   ├── customer.ts
│   │   └── supplier.ts
│   │
│   ├── lib/
│   │   └── utils.ts                  # cn() helper (clsx + twMerge)
│   │
│   ├── router/
│   │   ├── index.tsx                 # React Router v7 route tree
│   │   └── ProtectedRoute.tsx        # Auth guard wrapper
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                     # Tailwind v4 directives + CSS variables
│
├── components.json                   # shadcn/ui CLI config
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Download |
|---|---|---|
| Node.js | `>= 18.x LTS` | [nodejs.org](https://nodejs.org/) |
| npm | `>= 10.x` | Bundled with Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/careapp.git
cd careapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in your values — see [Environment Variables](#-environment-variables).

### 4. Start the Development Server

```bash
npm run dev
# → http://localhost:5173
```

### 5. Build for Production

```bash
npm run build        # type-check + bundle
npm run preview      # preview production build locally
```

### 6. Lint

```bash
npm run lint
```

---

## 🔐 Environment Variables

### `.env.local`

```env
# API Base URL
VITE_API_URL=http://localhost:5000/api

# Supabase (if connecting to a backend)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never commit `.env.local`. It is included in `.gitignore`.

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Dashboard | KPI cards, charts, recent activity |
| `/products` | Products | Catalog table — add / edit / delete |
| `/orders` | Orders | Order list, status tracking, receipt |
| `/customers` | Customers | Patient profiles & purchase history |
| `/inventory` | Inventory | Stock levels & expiry tracking (DnD) |
| `/suppliers` | Suppliers | Supplier directory & management |
| `/reports` | Reports | Revenue analytics & YoY comparisons |
| `/settings` | Settings | Account & pharmacy preferences |
| `/auth/login` | Login | User sign-in |
| `/auth/register` | Register | New account creation |

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `src/index.css` and reflected in the Tailwind config.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0A1628` | Sidebar background |
| `--navy-mid` | `#0F2040` | Sidebar hover states |
| `--navy-light` | `#1A3254` | Sidebar active background |
| `--emerald` | `#059669` | Primary brand, active nav |
| `--emerald-light` | `#10B981` | Hover on primary elements |
| `--gold` | `#C9961A` | Secondary accent |
| `--gold-light` | `#F59E0B` | Hover on gold elements |
| `--danger` | `#DC2626` | Low stock alerts, delete actions |
| `--info` | `#2563EB` | In-progress status, info states |
| `--gray-50` | `#F8FAFC` | Page background |
| `--gray-200` | `#E2E8F0` | Borders, dividers |
| `--gray-500` | `#64748B` | Muted / helper text |
| `--gray-800` | `#1E293B` | Primary body text |

### Order Status

| Status | Badge Color | Hex |
|---|---|---|
| ⏳ Pending | Amber | `#F59E0B` |
| 🔵 Processing | Blue | `#2563EB` |
| ✅ Completed | Emerald | `#059669` |
| ❌ Cancelled | Red | `#DC2626` |

### Stock Level

| Level | Indicator | Threshold |
|---|---|---|
| 🟢 In Stock | Emerald | `> 20 units` |
| 🟡 Low Stock | Amber | `5 – 20 units` |
| 🔴 Critical | Red | `< 5 units` |

### Typography

| Style | Size | Weight | Usage |
|---|---|---|---|
| Page Title | `20px` | `600` | Topbar heading |
| Section Heading | `14px` | `600` | Card & section titles |
| Table Header | `11.5px` | `600` | `UPPERCASE` column labels |
| Body | `13.5px` | `400` | Table rows, general content |
| Caption | `12px` | `400` | Labels, timestamps, metadata |
| Stat Value | `26px` | `700` | KPI number on stat cards |

### Spacing & Radius

```css
--radius:    8px;   /* Inputs, buttons */
--radius-lg: 12px;  /* Cards, modals */
--radius-xl: 16px;  /* Side panels */

--shadow-sm: 0 1px 3px rgba(0,0,0,.08);
--shadow:    0 4px 16px rgba(0,0,0,.10);
--shadow-lg: 0 12px 40px rgba(0,0,0,.16);
```

---

## 🏗️ Key Patterns

### State — Redux Toolkit Feature Slice

```ts
// src/features/products/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';

interface ProductsState {
  items: Product[];
  loading: boolean;
  selectedId: string | null;
}

const initialState: ProductsState = { items: [], loading: false, selectedId: null };

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    selectProduct: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
```

### Tables — TanStack Table v8

```tsx
// src/components/shared/DataTable.tsx
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

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
  name:     z.string().min(2, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  stock:    z.number().min(0, 'Stock cannot be negative'),
  price:    z.number().positive('Price must be positive'),
  expiry:   z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
});

type ProductForm = z.infer<typeof schema>;

export function ProductModal() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('name')} placeholder="Product name" />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
    </form>
  );
}
```

### Styling — `cn()` Utility

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage:
// <div className={cn('rounded-lg border p-4', isActive && 'border-emerald-500', className)} />
```

### Drag & Drop — @dnd-kit Sortable

```tsx
// src/features/inventory/InventoryPage.tsx
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

function InventoryPage() {
  const [items, setItems] = useState(inventoryList);

  function handleDragEnd({ active, over }) {
    if (active.id !== over?.id) {
      setItems(prev => {
        const oldIndex = prev.findIndex(i => i.id === active.id);
        const newIndex = prev.findIndex(i => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map(item => <DraggableItem key={item.id} item={item} />)}
      </SortableContext>
    </DndContext>
  );
}
```

---

## 🤝 Contributing

Contributions are welcome and appreciated! Please follow these steps:

1. **Fork** this repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Lint** before committing
   ```bash
   npm run lint
   ```
4. **Commit** using Conventional Commits
   ```bash
   git commit -m "feat: add expiry date alert to inventory page"
   ```
5. **Push** your branch
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a **Pull Request** against `main`

### Commit Types

| Type | Description |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure without feature change |
| `test` | Adding or updating tests |
| `chore` | Build process or config changes |

---

## 🙏 Acknowledgments

- ⚡ Powered by [Vite](https://vitejs.dev/) — lightning-fast frontend tooling
- 🧩 Component system by [shadcn/ui](https://ui.shadcn.com/)
- 📊 Charts by [Recharts](https://recharts.org/)
- 🗃 Tables by [TanStack Table](https://tanstack.com/table/v8)
- 🎯 Icons by [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- 🔤 Typography by [Geist Variable Font](https://vercel.com/font)

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0A1628,50:059669,100:0F2040&height=120&section=footer&fontColor=ffffff" />
</p>
