import { IToastService } from './src/toast/IToastService';
declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: typeof IToastService;
  }
}
