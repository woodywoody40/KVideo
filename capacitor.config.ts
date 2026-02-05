import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.woodytv.app',
  appName: 'WoodyTV',
  webDir: 'out',
  server: {
    url: 'https://woodytv.vercel.app/',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
