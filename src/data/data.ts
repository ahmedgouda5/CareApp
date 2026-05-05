export const customers = [
  {
    id: 1,
    name: "Mohamed Khalid",
    phone: "+20 100 234 5678",
    orders: 28,
    status: "Active",
    initials: "MK",
    avatarBg: "bg-green-100  dark:bg-green-900/40",
    avatarText: "text-green-700  dark:text-green-300",
  },
  {
    id: 2,
    name: "Sara Fahmy",
    phone: "+20 101 987 6543",
    orders: 14,
    status: "Active",
    initials: "SF",
    avatarBg: "bg-violet-100 dark:bg-violet-900/40",
    avatarText: "text-violet-700 dark:text-violet-300",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    phone: "+20 102 555 1234",
    orders: 42,
    status: "VIP",
    initials: "AH",
    avatarBg: "bg-amber-100  dark:bg-amber-900/40",
    avatarText: "text-amber-700  dark:text-amber-300",
  },
  {
    id: 4,
    name: "Layla Mostafa",
    phone: "+20 103 777 8899",
    orders: 7,
    status: "Inactive",
    initials: "LM",
    avatarBg: "bg-orange-100 dark:bg-orange-900/40",
    avatarText: "text-orange-700 dark:text-orange-300",
  },
  {
    id: 5,
    name: "Yusuf Omar",
    phone: "+20 106 333 2211",
    orders: 19,
    status: "Active",
    initials: "YO",
    avatarBg: "bg-sky-100    dark:bg-sky-900/40",
    avatarText: "text-sky-700    dark:text-sky-300",
  },
  {
    id: 6,
    name: "Nada Adel",
    phone: "+20 109 444 5566",
    orders: 11,
    status: "Active",
    initials: "NA",
    avatarBg: "bg-red-100    dark:bg-red-900/40",
    avatarText: "text-red-700    dark:text-red-300",
  },
  {
    id: 7,
    name: "Rania Zaki",
    phone: "+20 112 888 7766",
    orders: 35,
    status: "VIP",
    initials: "RZ",
    avatarBg: "bg-fuchsia-100 dark:bg-fuchsia-900/40",
    avatarText: "text-fuchsia-700 dark:text-fuchsia-300",
  },
];

export const orders = [
  {
    id: "#ORD-8821",
    products: "Amoxicillin, Panadol, B12",
    total: "$84.50",
    date: "Apr 19",
    status: "Done",
  },
  {
    id: "#ORD-8540",
    products: "Metformin 1g, Lisinopril",
    total: "$62.00",
    date: "Mar 28",
    status: "Done",
  },
  {
    id: "#ORD-8211",
    products: "Vitamin D3, Omega 3",
    total: "$44.00",
    date: "Feb 14",
    status: "Done",
  },
  {
    id: "#ORD-7990",
    products: "Aspirin, Paracetamol",
    total: "$21.00",
    date: "Jan 30",
    status: "Done",
  },
];

export const statusCls = {
  Active:
    "bg-green-100  text-green-700  dark:bg-green-900/40  dark:text-green-300",
  VIP: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Inactive:
    "bg-gray-200   text-gray-500   dark:bg-gray-700      dark:text-gray-400",
  Done: "bg-green-100  text-green-700  dark:bg-green-900/40  dark:text-green-300",
};
export const dotCls = {
  Active: "bg-green-500",
  VIP: "bg-yellow-500",
  Inactive: "bg-gray-400",
  Done: "bg-green-500",
};
