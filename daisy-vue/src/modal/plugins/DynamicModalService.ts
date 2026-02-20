import type { App } from 'vue';
import { DYNAMIC_MODAL_INJECTION_KEY, useDynamicModalService } from '../useDynamicModalService';

export default {
  install(app: App) {
    const service = useDynamicModalService();
    app.config.globalProperties.$dynamicDialog = service;
    app.provide(DYNAMIC_MODAL_INJECTION_KEY, service);
  },
};
