# 💊 PharmaCare Pro — Pharmacy Management System

A modern, single-file pharmacy management dashboard built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open and run.

---

## 🖥️ Preview

> Multi-page SPA-style dashboard with a dark navy sidebar, responsive stat cards, interactive charts, and full modal workflows for every entity.

---

## ✨ Features

### 📊 Dashboard
- KPI stat cards: Daily Revenue, Total Orders, Low Stock alerts, Active Patients
- Weekly sales & orders line chart (dual Y-axis)
- Category sales breakdown via doughnut chart
- Recent orders table with status badges
- Low stock alerts panel

### 💊 Products
- Full product catalog table with search
- Stock level indicators & expiry date tracking
- Add/Edit product modal with category, supplier, pricing, and stock fields

### 🛒 Orders
- Order list with status tracking (Pending, Processing, Completed, Cancelled)
- Order detail modal with line items and totals
- Print receipt & reorder actions

### 👥 Customers
- Patient profiles with purchase history
- Customer detail view

### 📦 Inventory
- Stock level monitoring
- Expiry date tracking with warning badges
- Inventory adjustment workflows

### 🏭 Suppliers
- Supplier directory with contact info, lead times, and payment terms
- Add Supplier modal (company, contact, country, specialization, payment terms)

### 📈 Reports & Analytics
- Monthly revenue chart (current year vs last year comparison)
- Sales performance metrics

### 🔐 Authentication
- Login & Register page previews

### ⚙️ Settings
- Account & pharmacy preferences UI

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Pure CSS (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | [Chart.js 4.4.1](https://www.chartjs.org/) via CDN |
| Fonts | Google Fonts — Outfit + DM Sans |

> **No build step. No dependencies to install. Zero config.**

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just double-click the file, or:
open pharmacy-management-system.html
```

### Option 2 — Serve locally (recommended for production-like testing)
```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → right-click the file → Open with Live Server
```

Then visit `http://localhost:8080/pharmacy-management-system.html`.

---

## 📁 Project Structure

```
pharmacy-management-system.html
│
├── <style>          # All CSS (CSS custom properties, layout, components)
│   ├── Layout       # Sidebar, topbar, main content area
│   ├── Components   # Cards, tables, badges, buttons, modals, forms
│   └── Pages        # Page-specific styles (dashboard, reports, etc.)
│
├── <body>           # All HTML markup
│   ├── .sidebar     # Navigation with section grouping + user card
│   ├── .main        # Topbar + page content areas
│   └── Modals       # addProduct, productDetail, orderDetail, addSupplier
│
└── <script>         # All JavaScript
    ├── navigate()   # SPA-style page switching
    ├── openModal()  # Modal open/close logic
    ├── initCharts() # Dashboard charts (lazy-initialized)
    └── initReportCharts() # Reports charts (lazy-initialized)
```

---

## 🎨 Design System

All design tokens are defined as CSS custom properties on `:root`:

```css
--navy: #0A1628         /* Sidebar background */
--emerald: #059669      /* Primary brand color */
--gold: #C9961A         /* Secondary accent */
--danger: #dc2626       /* Alerts & low stock */
--font-main: 'Outfit'   /* Headings & labels */
--font-body: 'DM Sans'  /* Body text */
```

---

## 📌 Pages

| Page | Route Trigger | Description |
|---|---|---|
| Dashboard | Default | KPIs + charts + recent activity |
| Products | `navigate('products')` | Catalog management |
| Orders | `navigate('orders')` | Order tracking |
| Customers | `navigate('customers')` | Patient profiles |
| Inventory | `navigate('inventory')` | Stock & expiry |
| Suppliers | `navigate('suppliers')` | Supplier directory |
| Reports | `navigate('reports')` | Analytics & charts |
| Auth | `navigate('auth')` | Login / Register preview |
| Settings | `navigate('settings')` | Preferences |

---

## ⚡ Extending the Project

To add a new page:

1. Add a nav item in `.sidebar-nav`
2. Add a `<div class="page" id="pg-newpage">` in the body
3. Register it in the `pageMeta` object in the script
4. Call `navigate('newpage', navEl)` from the nav item's `onclick`

To connect real data, replace the static HTML table rows with a `fetch()` call and render dynamically:

```javascript
async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  const tbody = document.querySelector('#products-table tbody');
  tbody.innerHTML = products.map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.stock}</td>
    </tr>
  `).join('');
}
```

---

## 📄 License

MIT — free to use, modify, and distribute.
