export const nav = {
  sections: [
    {
      label: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/",
          description: new Date().toLocaleString("en-US", {
            dateStyle: "full",
          }),
        },
        {
          title: "Reports & Analytics",
          url: "/reports",
          description: "Revenue, sales & performance",
        },
      ],
    },
    {
      label: "Pharmacy",
      items: [
        {
          title: "Products",
          url: "/product",
          description: "Manage your pharmacy catalog",
        },
        {
          title: "Inventory",
          url: "/inventory",
          description: "Stock levels & expiry tracking",
        },
        {
          title: "Orders",
          url: "/orders",
          description: "Track and manage all orders",
        },
      ],
    },
    {
      label: "People",
      items: [
        {
          title: "Customers",
          url: "/customers",
          description: "Patient profiles & history",
        },
        {
          title: "Suppliers",
          url: "/suppliers",
          description: "Manage supplier relationships",
        },
      ],
    },
    {
      label: "System",
      items: [
        {
          title: "Authentication",
          url: "/authentication",
          description: "Login & Register pages preview",
        },
        {
          title: "Settings",
          url: "/settings",
          description: "Account & pharmacy preferences",
        },
      ],
    },
  ],
};
