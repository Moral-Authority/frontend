import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: process.env.PORT || 3000 // Use Heroku's port if available
	},
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{ find: 'images', replacement: path.resolve(__dirname, "img") },
		]
	},
})
