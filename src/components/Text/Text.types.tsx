export interface TextProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  name?: string;
  type?: string;
}
