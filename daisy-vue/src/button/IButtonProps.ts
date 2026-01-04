export interface IButtonProps {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  outline?: boolean;
  ghost?: boolean;
  link?: boolean;
  disabled?: boolean;
  soft?: boolean;
  dash?: boolean;
  square?: boolean;
  circle?: boolean;
  label: string;
  loading?: boolean;
  loadingSpinnerType?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  loadingPosition?: 'left' | 'right';
}
