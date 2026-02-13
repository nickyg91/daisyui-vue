import type { ColorType } from '@/types/ColorType';
import type {
  ToastNotificationAlignment,
  ToastNotificationPosition,
} from '@/types/ToastNotificationPosition';
import type { VNode } from 'vue';

export interface IToastNotification {
  duration: number;
  content: string | VNode;
  title?: string;
  color: ColorType;
  group?: string;
  id?: string;
  soft?: boolean;
}
