import type { App } from 'vue';
import type { IToastNotification } from '../IToastNotification';
import ToastEventBus from '../ToastEventBus';
import { toastInjectionKey } from '../ToastServiceSymbol';
import { v4 as uuidv4 } from 'uuid';
import type { IToastService } from '../IToastService';
export default {
  install(app: App) {
    const toastNotificationService: IToastService = {
      add: (toast: IToastNotification) => {
        if (!toast.id) {
          toast.id = uuidv4();
        }

        ToastEventBus.emit('add', toast);
        return toast.id;
      },
      remove: (id: string) => {
        ToastEventBus.emit('remove', id);
      },
    };

    app.config.globalProperties.$toast = toastNotificationService;
    app.provide(toastInjectionKey, toastNotificationService);
  },
};
