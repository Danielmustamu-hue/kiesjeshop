import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Laad env variabelen (zoals API_KEY) uit .env of het systeem (Vercel)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Dit vervangt 'process.env.API_KEY' in de broncode met de daadwerkelijke waarde tijdens de build.
      // Het zoekt eerst in de geladen env file, dan in de systeem variabelen.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || ''),
    },
  };
});