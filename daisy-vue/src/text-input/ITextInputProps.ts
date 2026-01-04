export interface ITextInputProps {
  invalid?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  placeholder?: string;
  ghost?: boolean;
  accentColor?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}
