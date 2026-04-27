"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  addProductSchema,
  categoryOptions,
  statusOptions,
} from "../../Schemas/Prodcut-Schema";

type AddProductFormValues = z.infer<typeof addProductSchema>;

interface AddingProductModelProps {
  onAddProduct: (product: AddProductFormValues) => void;
}

export function AddingProductModel({ onAddProduct }: AddingProductModelProps) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      sku: "",
      category: "Antibiotic",
      price: 0,
      stock: 0,
      expiry: "",
      status: "In Stock",
    },
  });

  const onSubmit = (values: AddProductFormValues) => {
    console.log(values);
    onAddProduct(values);
    reset();
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
          Add Product
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Product</AlertDialogTitle>
          <AlertDialogDescription>
            Enter product details. Fields match the table columns.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form
          id="add-product-form"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-1 sm:col-span-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              placeholder="Amoxicillin 500mg"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1 sm:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Caps, Box of 30"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" placeholder="SKU-12345" {...register("sku")} />
            {errors.sku && (
              <p className="text-xs text-red-500">{errors.sku.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none dark:bg-input/30"
              {...register("category")}
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-xs text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min={0}
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <p className="text-xs text-red-500">{errors.price.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              min={0}
              {...register("stock", { valueAsNumber: true })}
            />
            {errors.stock && (
              <p className="text-xs text-red-500">{errors.stock.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="expiry">Expiry</Label>
            <Input id="expiry" placeholder="Jan 2027" {...register("expiry")} />
            {errors.expiry && (
              <p className="text-xs text-red-500">{errors.expiry.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none dark:bg-input/30"
              {...register("status")}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="text-xs text-red-500">{errors.status.message}</p>
            )}
          </div>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
          <Button
            type="submit"
            form="add-product-form"
            disabled={isSubmitting}
            className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          >
            {isSubmitting ? "Adding..." : "Add Product"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
