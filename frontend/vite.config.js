import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pn-chatapp-rn3r.onrender.com",
        secure: false,
      },
    },
  },
});
