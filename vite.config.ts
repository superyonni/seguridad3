import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3010,
    host: '0.0.0.0',
    allowedHosts: [
      'dash9.wisensor.cl', 
      'localhost', 
      '127.0.0.1', 
      '10.20.7.107',
      '104.26.12.250',
      '104.26.13.250',
      '172.67.70.44'
    ],
    cors: true
  }
}) 