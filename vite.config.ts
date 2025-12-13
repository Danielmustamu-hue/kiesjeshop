import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Laad de omgevingsvariabelen (zoals API_KEY van Netlify/Vercel)
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Dit zorgt ervoor dat 'process.env.API_KEY' in de code wordt vervangen door de echte sleutel of een lege string
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    },
  };
});