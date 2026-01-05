import type { ColorType } from '@/types/ColorType';
import type { LoadingSpinnerType } from '@/types/LoadingSpinnerType';
import type { SizeType } from '@/types/SizeType';

export interface IButtonProps {
  color?: ColorType;
  size?: SizeType;
  outline?: boolean;
  ghost?: boolean;
  link?: boolean;
  disabled?: boolean;
  soft?: boolean;
  dash?: boolean;
  square?: boolean;
  circle?: boolean;
  label?: string;
  loading?: boolean;
  loadingSpinnerType?: LoadingSpinnerType;
  loadingPosition?: SizeType;
}
