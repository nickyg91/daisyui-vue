import type { useDynamicModalService } from '@/modal/useDynamicModalService';
import { type IToastService } from './src/toast/IToastService';
declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: IToastService;
    $dynamicModal: ReturnType<typeof useDynamicModalService>;
  }
}
