import { inject } from 'vue';
import { DYNAMIC_MODAL_INJECTION_KEY, useDynamicModalService } from './useDynamicModalService';

export const useDynamicModal = () => {
  const dynamicModalService = inject<ReturnType<typeof useDynamicModalService>>(
    DYNAMIC_MODAL_INJECTION_KEY,
  );
  if (!dynamicModalService) {
    throw new Error('DynamicModalService is not provided');
  }
  return {
    showDialog: dynamicModalService.showDialog,
  };
};
