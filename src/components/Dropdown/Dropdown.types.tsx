// Dropdown.types.tsx
export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  ariaLabel?: string;
  options?: DropdownOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}
