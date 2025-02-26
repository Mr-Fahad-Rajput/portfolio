import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: false, // Allow external access to dev server
    proxy: {
      // Proxy all requests starting with "/api" to backend
      "/api": {
        target: "http://127.0.0.1:5000", // Correct localhost IP
        changeOrigin: true,
        secure: false, // For HTTP (not HTTPS)
        // Optional: Rewrite path if needed
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});