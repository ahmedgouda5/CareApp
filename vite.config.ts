import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/recharts")) return "charts";
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router-dom/")
          ) {
            return "react";
          }
          if (
            id.includes("node_modules/@reduxjs/toolkit/") ||
            id.includes("node_modules/react-redux/")
          ) {
            return "redux";
          }
          if (
            id.includes("node_modules/radix-ui/") ||
            id.includes("node_modules/@radix-ui/react-tabs/") ||
            id.includes("node_modules/lucide-react/")
          ) {
            return "ui";
          }
        },
      },
    },
  },
});
