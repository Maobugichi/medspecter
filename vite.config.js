import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/medspecter/",
  plugins: [tailwindcss(),react()],
  env: {
    VITE_OPENAI_API_KEY:process.env.VITE_OPENAI_API_KEY
  }
})
