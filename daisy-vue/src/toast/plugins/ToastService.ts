import type { App } from 'vue';
import type { IToastNotification } from '../IToastNotification';
import ToastEventBus from '../ToastEventBus';
import { toastInjectionKey } from '../ToastServiceSymbol';
export default {
  install(app: App) {
    const ToastNotificationService = {
      add: (toast: IToastNotification) => {
        ToastEventBus.emit('add', toast);
      },
      remove: (id: string) => {
        ToastEventBus.emit('remove', id);
      },
    };

    app.config.globalProperties.$toast = ToastNotificationService;
    app.provide(toastInjectionKey, ToastNotificationService);
  },
};
