import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), relay],
  server: {
    port: process.env.PORT || 3000, // Use Heroku's port if available
    // port: 3000, // Local development port
    // open: true, // Automatically open the browser on server start
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "images", replacement: path.resolve(__dirname, "img") },
    ],
  },
  // optimizeDeps: {
  //   include: ['jwt-decode']
  // }
});