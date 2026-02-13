import type { ColorType } from '@/types/ColorType';
import type { SizeType } from '@/types/SizeType';

export interface IBadgeProperties {
  value?: string;
  color?: ColorType;
  size?: SizeType;
  soft?: boolean;
}
