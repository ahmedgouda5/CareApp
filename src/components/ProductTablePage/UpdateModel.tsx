"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
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
} from "../../Schemas/Prodcut-Schema";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../../../store/store";
import { useCallback, useState } from "react";

type AddProductFormValues = z.infer<typeof addProductSchema>;

export function UpdateProductModel() {
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      sku: "",
      category: "Antibiotic",
      price: 0,
      stock: 0,
      expiry: "",
    },
  });

  const onSubmit = useCallback((values: AddProductFormValues) => {
    console.log("Update Product", values);
    reset();
    setOpen(false);
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="outline">
          ✏️
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Product</AlertDialogTitle>
        </AlertDialogHeader>

        <form
          id="edit-product-form"
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
            <Label htmlFor="stock"> Current Stock</Label>
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
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
          <Button
            type="submit"
            form="edit-product-form"
            disabled={isSubmitting}
            className="bg-linear-to-l from-green-400/80 to-green-900/90 text-white hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            {isSubmitting ? "Editing..." : "Edit Product"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
