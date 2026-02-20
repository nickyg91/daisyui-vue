import { inject } from 'vue';
import type { IToastService } from '../IToastService';
export const TOAST_INJECTION_KEY = Symbol('TOAST_SERVICE_INJECTION_KEY');

export const useToast = () => {
  const toastService = inject(TOAST_INJECTION_KEY);
  if (!toastService) {
    throw new Error('ToastService is not provided');
  }
  return toastService as IToastService;
};
