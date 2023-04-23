import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Moviexd/",
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    base: "",
  },
});
