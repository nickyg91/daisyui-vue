import type { ColorType } from '@/types/ColorType';
import type { VNode } from 'vue';

export interface IToastNotificationProps {
  content: string | VNode;
  title?: string;
  color?: ColorType;
  soft?: boolean;
}
