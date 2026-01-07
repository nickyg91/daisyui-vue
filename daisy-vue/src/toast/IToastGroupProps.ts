import type {
  ToastNotificationAlignment,
  ToastNotificationPosition,
} from '@/types/ToastNotificationPosition';

export interface IToastGroupProps {
  groupName?: string;
  position?: ToastNotificationPosition;
  alignment?: ToastNotificationAlignment;
}
