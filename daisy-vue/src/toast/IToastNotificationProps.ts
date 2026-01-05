import type { ColorType } from '@/types/ColorType';
import type {
  ToastNotificationAlignment,
  ToastNotificationPosition,
} from '@/types/ToastNotificationPosition';
import type { VNode } from 'vue';

export interface IToastNotificationProps {
  content: string | VNode;
  title?: string;
  color?: ColorType;
  position?: ToastNotificationPosition;
  alignment?: ToastNotificationAlignment;
}
