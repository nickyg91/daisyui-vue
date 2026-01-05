import type { ColorType } from '@/types/ColorType';
import type { SizeType } from '@/types/SizeType';
import type { DeepReadonly } from 'vue';

export interface ISelectListProps<T> {
  items: T[] | DeepReadonly<T[]>;
  displayNameKey?: string;
  selectOptionValueKey?: string;
  disabled?: boolean;
  invalid?: boolean;
  ghost?: boolean;
  size?: SizeType;
  placeholder?: string;
  accentColor?: ColorType;
}
