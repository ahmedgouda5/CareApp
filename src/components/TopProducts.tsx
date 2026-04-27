import React from "react";

type Product = {
  name: string;
  value: number;
  max: number;
  color: string;
};

const products: Product[] = [
  {
    name: "Amoxicillin 500mg",
    value: 18420,
    max: 20000,
    color: "bg-emerald-500",
  },
  {
    name: "Insulin Glargine",
    value: 14200,
    max: 20000,
    color: "bg-blue-500",
  },
  {
    name: "Vitamin D3 1000IU",
    value: 11880,
    max: 20000,
    color: "bg-amber-500",
  },
  {
    name: "Metformin 1g",
    value: 9640,
    max: 20000,
    color: "bg-blue-500",
  },
  {
    name: "Omeprazole 20mg",
    value: 7240,
    max: 20000,
    color: "bg-emerald-500",
  },
];

const TopProducts: React.FC = () => {
  return (
    <div className="h-full rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Top Products
      </h2>

      <div className="space-y-16">
        {products.map((product, index) => {
          const percentage = (product.value / product.max) * 100;

          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {product.name}
                </span>

                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  ${product.value.toLocaleString()}
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <div
                  className={`h-full rounded-full ${product.color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProducts;
