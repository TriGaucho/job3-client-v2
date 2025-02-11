import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'technological-kiwi-mmcode-27e018c9.koyeb.app', // Adicione o domínio do Koyeb aqui
    ],
  },
});