import type { ColorType } from '@/types/ColorType';
import type { SizeType } from '@/types/SizeType';

export interface ITextInputProps {
  invalid?: boolean;
  disabled?: boolean;
  size?: SizeType;
  placeholder?: string;
  ghost?: boolean;
  accentColor?: ColorType;
}
