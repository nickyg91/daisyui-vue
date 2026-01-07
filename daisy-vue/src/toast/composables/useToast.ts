import { inject } from 'vue';
import { toastInjectionKey } from '../ToastServiceSymbol';
import type { IToastService } from '../IToastService';

export const useToast = () => {
  const toastService = inject(toastInjectionKey);
  if (!toastService) {
    throw new Error('ToastService is not provided');
  }
  return toastService as IToastService;
};
