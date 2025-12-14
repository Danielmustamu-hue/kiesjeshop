import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // We laden de omgevingsvariabelen veilig in
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Hier koppelen we de beveiligde variabele aan de code
      // 'process.env.API_KEY' wordt vervangen door de waarde in Vercel tijdens de build
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || ''),
    },
  };
});